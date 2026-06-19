/**
 * Full-text search over the BabylonJS docs index.
 *
 * Strategy: case-insensitive scoring with heavy bonuses for exact title and
 * heading hits, moderate bonuses for body hits. Snippet extraction around the
 * first match. No external dependency — a tight loop over ~4000 docs of a few
 * KB each is fast and trivially auditable.
 */

import type { DocIndexEntry } from "./docs.js";

export interface SearchHit {
  /** Path of the matching document (relative to docs root, no extension). */
  path: string;
  /** Title of the matching document. */
  title: string;
  /** Category (top-level path segment). */
  category: string;
  /** Numeric relevance score — higher means more relevant. */
  score: number;
  /** Snippet around the first match, with the query term highlighted. */
  snippet: string;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Extract a snippet around the first occurrence of `needle` in `haystack`. */
function extractSnippet(
  haystack: string,
  needle: string,
  radius = 120,
): string {
  const lower = haystack.toLowerCase();
  const idx = lower.indexOf(needle.toLowerCase());
  if (idx === -1) return haystack.slice(0, 250).replace(/\s+/g, " ").trim();
  const start = Math.max(0, idx - radius);
  const end = Math.min(haystack.length, idx + needle.length + radius);
  let snippet = haystack.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < haystack.length) snippet = snippet + "…";
  const re = new RegExp(`(${escapeRegex(needle)})`, "ig");
  snippet = snippet.replace(re, "**$1**");
  return snippet;
}

export function searchDocs(
  index: DocIndexEntry[],
  query: string,
  limit = 20,
): SearchHit[] {
  const q = query.trim();
  if (!q) return [];
  const needle = q.toLowerCase();
  const tokens = needle.split(/\s+/).filter(Boolean);

  const hits: SearchHit[] = [];

  for (const doc of index) {
    const lowerTitle = doc.title.toLowerCase();
    const lowerHeadings = doc.headings.map((h) => h.toLowerCase());
    const lowerBody = doc.bodyFlattened.toLowerCase();

    let score = 0;

    // Title matches (weighted heavily)
    if (lowerTitle === needle) score += 100;
    else if (lowerTitle.includes(needle)) score += 60;
    else if (tokens.every((t) => lowerTitle.includes(t))) score += 30;
    else if (tokens.some((t) => lowerTitle.includes(t))) score += 10;

    // Heading matches (medium bonus)
    for (const lh of lowerHeadings) {
      if (lh.includes(needle)) score += 15;
      else if (tokens.every((t) => lh.includes(t))) score += 8;
      else if (tokens.some((t) => lh.includes(t))) score += 2;
    }

    // Body matches
    if (lowerBody.includes(needle)) score += 12;
    else if (tokens.every((t) => lowerBody.includes(t))) score += 6;
    else if (tokens.some((t) => lowerBody.includes(t))) score += 2;
    else continue; // no match at all — skip

    const snippet = extractSnippet(doc.bodyFlattened, q);

    hits.push({
      path: doc.path,
      title: doc.title,
      category: doc.category,
      score,
      snippet,
    });
  }

  hits.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
  return hits.slice(0, limit);
}
