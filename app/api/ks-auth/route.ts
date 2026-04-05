import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

function makeToken(): string {
  const password = process.env.KEYSTATIC_PASSWORD!;
  const secret = process.env.KEYSTATIC_SECRET!;
  return createHmac("sha256", secret).update(password).digest("hex");
}

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!password || password !== process.env.KEYSTATIC_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("ks-auth", makeToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  // Inject GitHub PAT directly so Keystatic can make API calls without OAuth
  const pat = process.env.GITHUB_ACCESS_TOKEN;
  if (pat) {
    res.cookies.set("keystatic-gh-access-token", pat, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  }

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("ks-auth");
  res.cookies.delete("keystatic-gh-access-token");
  return res;
}
