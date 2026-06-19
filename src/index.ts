#!/usr/bin/env node
/**
 * babylonjs_docs_mcp — an MCP server that exposes the BabylonJS documentation
 * to AI agents such as opencode, Claude Code, Cursor, etc.
 *
 * It speaks the Model Context Protocol over stdio and exposes:
 *
 *   Tools
 *   -----
 *   - list_docs({path?})     → browse docs tree (directories + files with counts)
 *   - read_doc({path})       → read a single doc page (frontmatter stripped)
 *   - search_docs({query})   → ranked full-text search with snippets
 *
 *   Resources
 *   ---------
 *   - babylonjs://docs/{path} for every page (read with `resources/read`)
 *
 *   Prompts
 *   -------
 *   - babylonjs_overview      → ready-made system prompt with the doc summary
 *
 * Configuration:
 *   - BABYLONJS_DOCS_PATH    absolute path to a custom docs directory
 *                           (defaults to the `docs/` shipped with this package)
 */

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import {
  buildSearchIndex,
  readDoc,
  findDocByPath,
  listDirectory,
  getDocsStats,
  resolveDocsDir,
  type DocIndexEntry,
} from "./lib/docs.js";
import { searchDocs, type SearchHit } from "./lib/search.js";

const SERVER_NAME = "babylonjs-docs-mcp";
const SERVER_VERSION = "9.13.0-mcp.1";

const docsDir = resolveDocsDir();
let index: DocIndexEntry[];
try {
  index = buildSearchIndex(docsDir);
} catch (err) {
  process.stderr.write(
    `[${SERVER_NAME}] Failed to load docs from ${docsDir}: ${(err as Error).message}\n`,
  );
  index = [];
}

const stats = getDocsStats(docsDir);
process.stderr.write(
  `[${SERVER_NAME}] Loaded ${stats.totalFiles} doc pages from ${docsDir}\n` +
    `[${SERVER_NAME}] Categories: ${Object.entries(stats.categories)
      .map(([k, v]) => `${k}=${v}`)
      .join(", ")}\n`,
);

const server = new McpServer(
  { name: SERVER_NAME, version: SERVER_VERSION },
  {
    capabilities: {
      tools: { listChanged: false },
      resources: { listChanged: false, subscribe: false },
      prompts: { listChanged: false },
    },
  },
);

// ──────────────────────────────────────────────────────────────────────────────
// Tools
// ──────────────────────────────────────────────────────────────────────────────

server.registerTool(
  "list_docs",
  {
    title: "List BabylonJS documentation directory",
    description:
      "List files and directories in the BabylonJS documentation tree. " +
      "Pass a `path` to drill into a sub-directory (e.g. 'api', 'api/core/src/classes', " +
      "'examples/features'). Omit `path` to see the top-level structure. " +
      "Directories include a recursive `.md` file count so you can gauge size. " +
      "Use this first to discover what documentation is available.",
    inputSchema: {
      path: z
        .string()
        .optional()
        .describe(
          "Directory path relative to docs root (omit for root). " +
            "E.g. 'api', 'examples/features', 'api/core/src/classes'.",
        ),
    },
  },
  ({ path }) => {
    try {
      const result = listDirectory(path ?? "", docsDir);
      const lines = result.entries.map((e) => {
        if (e.type === "directory") {
          return `📁 ${e.name}/  (${e.fileCount} files)  [${e.path}]`;
        }
        return `📄 ${e.name}  [${e.path}]`;
      });
      const text =
        `Contents of /${path || ""} (${result.entries.length} items)\n` +
        `────────────────────────────────────────\n` +
        `${lines.join("\n")}\n\n` +
        `Use 'read_doc' with a file path, or 'list_docs' with a directory path to explore further.`;
      return {
        content: [{ type: "text", text }],
      };
    } catch (err) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Error listing ${JSON.stringify(path ?? "")}: ${(err as Error).message}`,
          },
        ],
      };
    }
  },
);

server.registerTool(
  "read_doc",
  {
    title: "Read a BabylonJS documentation page",
    description:
      "Read the full content of a specific BabylonJS documentation page by its " +
      "path. The path is relative to the docs root without the `.md` extension " +
      "(e.g. 'api/core/src/classes/Scene', " +
      "'examples/features/introductionToFeatures/chap1/first_scene'). " +
      "YAML frontmatter is stripped; all Markdown content and code blocks are " +
      "preserved. Use `list_docs` to discover paths or `search_docs` to find by keyword.",
    inputSchema: {
      path: z
        .string()
        .describe(
          "File path relative to docs root (e.g. 'api/core/src/classes/Scene' or " +
            "'examples/features/introductionToFeatures/chap1/first_scene'). A '.md' " +
            "suffix is optional.",
        ),
    },
  },
  ({ path }) => {
    const doc = readDoc(path, docsDir);
    if (!doc) {
      // Fallback: try fuzzy path matching against the index
      const entry = findDocByPath([path], index);
      if (entry) {
        const fallback = readDoc(entry.path, docsDir);
        if (fallback) {
      return {
        content: [{ type: "text", text: `# ${fallback.title}\n\n*path: \`${fallback.path}\`*\n\n${fallback.content}` }],
      };
        }
      }
      return {
        isError: true,
        content: [
          {
            type: "text",
            text:
              `Document not found: ${JSON.stringify(path)}.\n` +
              `Use the 'list_docs' tool to browse available paths, or 'search_docs' ` +
              `to find pages by keyword.`,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: "text",
          text: `# ${doc.title}\n\n*path: \`${doc.path}\`*\n\n${doc.content}`,
        },
      ],
    };
  },
);

server.registerTool(
  "search_docs",
  {
    title: "Search BabylonJS documentation",
    description:
      "Full-text search across all BabylonJS documentation (API reference and " +
      "guides/examples). Results are ranked by relevance (title hits weighted " +
      "highest, then headings, then body) and each hit includes a snippet around " +
      "the first match. Use this to find pages about a specific class, method, " +
      "feature, or concept (e.g. 'Scene', 'WebXR', 'shadow', 'camera follow').",
    inputSchema: {
      query: z
        .string()
        .min(1)
        .describe(
          "Search query: class name, method, feature, or concept " +
            "(e.g. 'Scene', 'WebXR', 'shadow', 'camera follow'). Multi-word queries " +
            "match pages containing every term.",
        ),
      limit: z
        .number()
        .int()
        .min(1)
        .max(50)
        .optional()
        .describe("Maximum number of hits to return (default 20)."),
    },
  },
  ({ query, limit }) => {
    const hits: SearchHit[] = searchDocs(index, query, limit ?? 20);
    if (hits.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No documentation matched ${JSON.stringify(query)}. Try a broader or alternate term.`,
          },
        ],
      };
    }
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              query,
              total_hits: hits.length,
              hits: hits.map((h) => ({
                path: h.path,
                title: h.title,
                category: h.category,
                score: h.score,
                snippet: h.snippet,
              })),
            },
            null,
            2,
          ),
        },
      ],
    };
  },
);

// ──────────────────────────────────────────────────────────────────────────────
// Resources
// ──────────────────────────────────────────────────────────────────────────────

server.registerResource(
  "docs",
  new ResourceTemplate("babylonjs://docs/{+path}", {
    list: undefined,
    complete: {
      path: () => index.map((d) => d.path),
    },
  }),
  {
    title: "BabylonJS doc page",
    description:
      "A single BabylonJS documentation page. `path` is the same identifier used " +
      "by the `read_doc` tool (relative path without `.md`).",
    mimeType: "text/markdown",
  },
  (uri, variables) => {
    const raw = variables.path;
    const pathStr = Array.isArray(raw) ? raw[0] ?? "" : (raw ?? "");
    const doc = readDoc(pathStr, docsDir);
    if (!doc) {
      throw new Error(`Document not found for URI ${uri.toString()}`);
    }
    return {
      contents: [
        {
          uri: uri.toString(),
          mimeType: "text/markdown",
          text: doc.content,
        },
      ],
    };
  },
);

// ──────────────────────────────────────────────────────────────────────────────
// Prompts
// ──────────────────────────────────────────────────────────────────────────────

server.registerPrompt(
  "babylonjs_overview",
  {
    title: "BabylonJS documentation overview",
    description:
      "Returns a system-style message describing what BabylonJS is and summarising " +
      "the documentation structure (categories, file counts). Useful to prime a " +
      "chat before the user asks their first question.",
    argsSchema: {},
  },
  () => {
    const lines = [
      "You are an expert assistant for BabylonJS, a powerful, beautiful, and simple",
      "open-source 3D rendering engine for the web (WebGL, WebGPU, WebXR). BabylonJS",
      "provides a full-featured scene graph, physics, animations, materials, GUI,",
      "audio, and more.",
      "",
      "The documentation has two main sections:",
      "",
      "1. **API reference** (`api/`) — auto-generated from TypeScript source via",
      "   TypeDoc. Contains every class, interface, enumeration, function, type",
      "   alias, and variable across all BabylonJS packages (@babylonjs/core,",
      "   @babylonjs/gui, @babylonjs/loaders, @babylonjs/materials, @babylonjs/serializers).",
      "",
      "2. **Guides & examples** (`examples/`) — hand-written tutorials and deep",
      "   dives covering cameras, lights, materials, meshes, particles, animations,",
      "   physics, WebXR, and more.",
      "",
      "Always ground answers in the documentation. Use `list_docs` to browse the",
      "directory tree, `search_docs` to find pages by keyword, and `read_doc` to",
      "read a specific page.",
      "",
      `Documentation stats (${stats.totalFiles} total files):`,
      "",
    ];
    for (const [category, count] of Object.entries(stats.categories).sort()) {
      lines.push(`- \`${category}\` — ${count} files`);
    }
    lines.push("");
    lines.push("Quick-start paths for common topics:");
    lines.push("- Core classes: `api/core/src/classes/` (Scene, Mesh, Engine, Camera, …)");
    lines.push("- Features: `examples/features/` (deep dives on every engine feature)");
    lines.push("- Getting started: `examples/features/introductionToFeatures/`");
    return {
      messages: [
        {
          role: "user",
          content: { type: "text", text: lines.join("\n") },
        },
      ],
    };
  },
);

// ──────────────────────────────────────────────────────────────────────────────
// Boot
// ──────────────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);

process.stderr.write(`[${SERVER_NAME}] MCP server ready (stdio transport)\n`);
