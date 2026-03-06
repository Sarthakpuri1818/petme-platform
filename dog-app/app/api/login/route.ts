import { connectDB } from "@/app/databse/databse";
import User from "@/app/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const reqbody = await request.json();
    const email = (reqbody.email || "").toLowerCase().trim();
    const password = reqbody.password;

    if (!email || !password) {
      return NextResponse.json(
        { error: "email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }

    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: "JWT_SECRET is missing in .env.local" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({ message: "login successful" }, { status: 200 });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "something went wrong", details: error?.message },
      { status: 500 }
    );
  }
}