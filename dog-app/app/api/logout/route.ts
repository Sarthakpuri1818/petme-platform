// app/api/logout/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ message: "logout successful" });

    // ✅ clear token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",        // IMPORTANT
      expires: new Date(0),
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}