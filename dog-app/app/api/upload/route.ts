import { NextResponse } from "next/server";
import cloudinary from "@/app/helpers/cloudinary";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image } = body;

    const upload = await cloudinary.uploader.upload(image, {
      folder: "petme-dogs",
    });

    return NextResponse.json({
      imageUrl: upload.secure_url,
    });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}