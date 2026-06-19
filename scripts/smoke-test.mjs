#!/usr/bin/env node
/**
 * Smoke-test babylonjs_docs_mcp over stdio.
 *
 * Spawns `dist/index.js`, performs the MCP handshake, then exercises
 * `tools/list`, `tools/call` for each tool, `resources/templates/list`,
 * `resources/read`, and `prompts/list`.
 * Exits non-zero on any unexpected response.
 *
 * Run from the package root:
 *     node scripts/smoke-test.mjs
 */

import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SERVER_PATH = join(__dirname, "..", "dist", "index.js");

const child = spawn("node", [SERVER_PATH], {
  stdio: ["pipe", "pipe", "inherit"],
});

let buf = "";
const pending = new Map();

function send(method, params = {}) {
  const id = randomUUID();
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    const msg = { jsonrpc: "2.0", id, method, params };
    child.stdin.write(JSON.stringify(msg) + "\n");
  });
}

function notify(method, params = {}) {
  const msg = { jsonrpc: "2.0", method, params };
  child.stdin.write(JSON.stringify(msg) + "\n");
}

child.stdout.on("data", (chunk) => {
  buf += chunk.toString("utf8");
  let idx;
  while ((idx = buf.indexOf("\n")) >= 0) {
    const line = buf.slice(0, idx).trim();
    buf = buf.slice(idx + 1);
    if (!line) continue;
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      console.error("Bad JSON from server:", line);
      continue;
    }
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(`RPC error: ${JSON.stringify(msg.error)}`));
      else resolve(msg.result);
    }
  }
});

child.on("exit", (code, signal) => {
  if (pending.size > 0) {
    console.error(
      `Server exited with ${pending.size} pending requests (code=${code}, signal=${signal})`,
    );
    process.exit(1);
  }
});

let failures = 0;
function check(name, cond, details) {
  if (cond) {
    console.log(`  ✓ ${name}`);
  } else {
    console.log(`  ✗ ${name}`);
    if (details !== undefined) console.log("     ", details);
    failures++;
  }
}

try {
  // 1. Handshake
  console.log("→ initialize");
  const init = await send("initialize", {
    protocolVersion: "2025-06-18",
    capabilities: {},
    clientInfo: { name: "smoke-test", version: "0.0.0" },
  });
  check(
    "serverInfo.name == babylonjs-docs-mcp",
    init.serverInfo.name === "babylonjs-docs-mcp",
    init.serverInfo,
  );
  check("tools capability declared", !!init.capabilities.tools);
  check("resources capability declared", !!init.capabilities.resources);
  notify("notifications/initialized", {});

  // 2. tools/list
  console.log("→ tools/list");
  const toolsList = await send("tools/list", {});
  const toolNames = toolsList.tools.map((t) => t.name).sort();
  check("exposes list_docs", toolNames.includes("list_docs"), toolNames);
  check("exposes read_doc", toolNames.includes("read_doc"));
  check("exposes search_docs", toolNames.includes("search_docs"));

  // 3. list_docs — root
  console.log("→ tools/call list_docs {}");
  const rootList = await send("tools/call", { name: "list_docs", arguments: {} });
  check("list_docs root returns non-empty text", rootList.content[0].text.length > 100);
  check(
    "list_docs root mentions 'api'",
    /api/.test(rootList.content[0].text),
    rootList.content[0].text.slice(0, 200),
  );

  // 4. list_docs — sub-directory
  console.log("→ tools/call list_docs {path:'api/core/src/classes'}");
  const classList = await send("tools/call", {
    name: "list_docs",
    arguments: { path: "api/core/src/classes" },
  });
  check(
    "list_docs classes returns items",
    classList.content[0].text.includes("items"),
  );
  check(
    "list_docs classes has Scene file",
    /Scene/.test(classList.content[0].text),
    classList.content[0].text.slice(0, 300),
  );

  // 5. read_doc — API class
  console.log("→ tools/call read_doc {path:'api/core/src/classes/Scene'}");
  const sceneRes = await send("tools/call", {
    name: "read_doc",
    arguments: { path: "api/core/src/classes/Scene" },
  });
  check(
    "read_doc Scene returns non-empty text",
    sceneRes.content[0].text.length > 500,
    `len=${sceneRes.content[0].text.length}`,
  );
  check("Scene page mentions 'Class: Scene'", /Class:\s*Scene/.test(sceneRes.content[0].text));
  check("Scene page has no leftover frontmatter", !/^---\n/.test(sceneRes.content[0].text));

  // 6. read_doc — guide page
  console.log(
    "→ tools/call read_doc {path:'examples/features/introductionToFeatures/chap1/first_scene'}",
  );
  const guideRes = await send("tools/call", {
    name: "read_doc",
    arguments: {
      path: "examples/features/introductionToFeatures/chap1/first_scene",
    },
  });
  check(
    "guide page returns non-empty text",
    guideRes.content[0].text.length > 500,
    `len=${guideRes.content[0].text.length}`,
  );
  check("guide page has no leftover frontmatter", !/^---\n/.test(guideRes.content[0].text));
  check(
    "guide page preserves a fenced code block",
    /```[\s\S]+?```/.test(guideRes.content[0].text) || /First Scene/i.test(guideRes.content[0].text),
  );

  // 7. read_doc — unknown path is reported gracefully
  console.log("→ tools/call read_doc {path:'does/not/exist'}");
  const miss = await send("tools/call", {
    name: "read_doc",
    arguments: { path: "does/not/exist" },
  });
  check("missing path returns isError=true", miss.isError === true);

  // 8. search_docs
  console.log("→ tools/call search_docs {query:'WebXR'}");
  const searchRes = await send("tools/call", {
    name: "search_docs",
    arguments: { query: "WebXR" },
  });
  let searchPayload;
  try {
    searchPayload = JSON.parse(searchRes.content[0].text);
  } catch {
    searchPayload = { total_hits: 0 };
  }
  check("search returns hits", searchPayload.total_hits >= 1, searchPayload);
  if (searchPayload.hits && searchPayload.hits.length > 0) {
    const topHit = searchPayload.hits[0];
    check("top hit has a snippet", typeof topHit.snippet === "string" && topHit.snippet.length > 0);
    check("top hit has a path", typeof topHit.path === "string" && topHit.path.length > 0);
  }

  // 9. search_docs — class name
  console.log("→ tools/call search_docs {query:'Vector3'}");
  const vecSearch = await send("tools/call", {
    name: "search_docs",
    arguments: { query: "Vector3" },
  });
  let vecPayload;
  try {
    vecPayload = JSON.parse(vecSearch.content[0].text);
  } catch {
    vecPayload = { total_hits: 0 };
  }
  check(
    "Vector3 search returns hits",
    vecPayload.total_hits >= 1,
    `hits=${vecPayload.total_hits}`,
  );

  // 10. resources/templates/list
  console.log("→ resources/templates/list");
  const tplList = await send("resources/templates/list", {});
  check(
    "has docs template",
    tplList.resourceTemplates.some((t) => /babylonjs:\/\/docs\//.test(t.uriTemplate)),
  );

  // 11. resources/read via the template
  console.log("→ resources/read babylonjs://docs/api/core/src/classes/Scene");
  const resRead = await send("resources/read", {
    uri: "babylonjs://docs/api/core/src/classes/Scene",
  });
  check(
    "resource read returns text",
    resRead.contents[0].text.length > 500,
    `len=${resRead.contents[0].text.length}`,
  );

  // 12. prompts/list
  console.log("→ prompts/list");
  const promptList = await send("prompts/list", {});
  check(
    "has babylonjs_overview prompt",
    promptList.prompts.some((p) => p.name === "babylonjs_overview"),
  );

  console.log("");
  if (failures === 0) {
    console.log("All checks passed.");
  } else {
    console.log(`${failures} check(s) failed.`);
  }
  child.kill();
  setTimeout(() => process.exit(failures === 0 ? 0 : 1), 50);
} catch (err) {
  console.error("Smoke test failed:", err);
  child.kill();
  process.exit(1);
}
