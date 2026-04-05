import { NextRequest, NextResponse } from "next/server";

async function makeToken(password: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(password));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/keystatic")) return NextResponse.next();

  // Allow login page and auth API through
  if (pathname === "/keystatic-login") return NextResponse.next();

  const password = process.env.KEYSTATIC_PASSWORD;
  const secret = process.env.KEYSTATIC_SECRET;

  if (!password || !secret) {
    return NextResponse.redirect(new URL("/keystatic-login", req.url));
  }

  const authCookie = req.cookies.get("ks-auth")?.value;
  const expected = await makeToken(password, secret);

  if (authCookie !== expected) {
    return NextResponse.redirect(new URL("/keystatic-login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic/:path*"],
};
