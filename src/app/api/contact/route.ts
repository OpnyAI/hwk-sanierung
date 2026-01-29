import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
