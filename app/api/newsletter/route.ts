import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const listmonkUrl = process.env.LISTMONK_URL;
    const username = process.env.LISTMONK_USERNAME;
    const password = process.env.LISTMONK_PASSWORD;
    const listId = parseInt(process.env.LISTMONK_LIST_ID ?? "3");

    if (!listmonkUrl || !username || !password) {
      // Dev mode: just return success
      return NextResponse.json({ success: true });
    }

    const res = await fetch(`${listmonkUrl}/api/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email,
        name: email.split("@")[0],
        status: "enabled",
        lists: [listId],
        preconfirm_subscriptions: true,
      }),
    });

    if (!res.ok && res.status !== 409) {
      // 409 = already subscribed, treat as success
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
