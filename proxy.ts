import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimit = new Map<string, { count: number; reset: number }>();
const LIMIT = 60;
const WINDOW = 60_000;

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW });
  } else {
    entry.count++;
    if (entry.count > LIMIT) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
