import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
  const secret = process.env.KEYSTATIC_SECRET;

  if (!clientId || !clientSecret || !secret) {
    return NextResponse.json({
      ok: false,
      missing: {
        KEYSTATIC_GITHUB_CLIENT_ID: !clientId,
        KEYSTATIC_GITHUB_CLIENT_SECRET: !clientSecret,
        KEYSTATIC_SECRET: !secret,
      },
    });
  }

  // Check credentials against GitHub API
  const res = await fetch(
    `https://api.github.com/applications/${clientId}/token`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token: "dummy_test_token" }),
    }
  );

  const body = await res.json();

  return NextResponse.json({
    ok: true,
    envVarsPresent: true,
    clientIdPrefix: clientId.slice(0, 6) + "...",
    secretLength: secret.length,
    githubCheckStatus: res.status,
    // 422 = credentials valid but token not found (expected for dummy token)
    // 401 = credentials invalid
    credentialsValid: res.status === 422 || res.status === 404,
    githubResponse: body,
  });
}
