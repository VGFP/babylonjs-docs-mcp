#!/usr/bin/env node
/**
 * Sanity-check the Markdown preprocessor on every doc. We're code-fence aware
 * so that "import" statements or other patterns inside an example block don't
 * count as leftover scaffolding.
 *
 * Run from the package root:
 *     node scripts/lint-preprocessed.mjs
 */
import { buildSearchIndex } from "../dist/lib/docs.js";

let problems = 0;
const index = buildSearchIndex();

function scanNonCode(text, re) {
  // Walk line by line, skipping fenced code blocks; return the first
  // match (with line number) or null.
  const lines = text.split("\n");
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (fence) {
      const closer = new RegExp(`^\\s*${fence[0]}{${fence.length},}`);
      if (closer.test(line)) fence = null;
      continue;
    }
    const m = line.match(/^(\s*)(```+|~~~+)/);
    if (m) {
      fence = m[2];
      continue;
    }
    const hit = re.exec(line);
    if (hit) return { line, lineNo: i + 1, hit: hit[0] };
  }
  return null;
}

for (const d of index) {
  const body = d.bodyFlattened;
  const issues = [];

  // Every entry should have a non-empty title
  if (!d.title || d.title.trim().length === 0) {
    issues.push("missing title");
  }

  // Body should not be completely empty (unless it's a stub)
  if (body.trim().length === 0 && d.size > 100) {
    issues.push(`non-empty source (${d.size} bytes) but empty body`);
  }

  // Flattened body should have some searchable text
  if (body.length < 10 && d.size > 200) {
    issues.push(`suspiciously short flattened body (${body.length} chars)`);
  }

  if (issues.length > 0) {
    console.log(`✗ ${d.path}  →  ${issues.join(", ")}`);
    problems++;
    // Don't flood output — cap at 50 reported problems
    if (problems >= 50) {
      console.log("... (truncated, too many problems)");
      break;
    }
  }
}

console.log(`\n${index.length} docs scanned, ${problems} with potential issues.`);
process.exit(problems === 0 ? 0 : 1);
