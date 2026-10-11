import links from "../data/links.json";

console.log("LINKS LOADED:", Object.keys(links));

export function getLink(code: string): string | null {
  const result = (links as Record<string, string>)[code] ?? null;
  console.log("GETLINK:", code, "=>", result);
  return result;
}