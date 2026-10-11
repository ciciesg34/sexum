import links from "../data/links.json";

export type LinkData = {
  url: string;
  thumbnail?: string;
};

export function getLink(code: string): LinkData | null {
  return (links as Record<string, LinkData>)[code] ?? null;
}