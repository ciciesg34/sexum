import fs from "fs";
import path from "path";

let cache: Record<string, string> | null = null;

export function getLink(code: string): string | null {
  if (!cache) {
    const filePath = path.join(process.cwd(), "data", "links.json");
    cache = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  return cache[code] ?? null;
}