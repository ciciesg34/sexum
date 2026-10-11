import fs from "fs";
import path from "path";

let cache: Record<string, string> | null = null;

function loadLinks(): Record<string, string> {
  if (cache) return cache;
  const filePath = path.join(process.cwd(), "data", "links.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as Record<string, string>;
  cache = parsed;
  return parsed;
}

export function getLink(code: string): string | null {
  const links = loadLinks();
  return links[code] ?? null;
}