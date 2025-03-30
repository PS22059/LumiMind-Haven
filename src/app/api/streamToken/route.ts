import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "User not authenticated" }, { status: 401 });

  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
  );

  const token = streamClient.generateUserToken({ user_id: user.id });

  return NextResponse.json({ token });
}
