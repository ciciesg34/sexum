import links from "../data/links.json";

export function getLink(code: string): string | null {
  return (links as Record<string, string>)[code] ?? null;
}