import { NextResponse } from "next/server";
import { connectDB } from "@/app/databse/databse";
import Dog from "@/app/models/dog";

export async function GET() {
  try {
    await connectDB();

    const dogs = await Dog.find().sort({ createdAt: -1 });

    return NextResponse.json({ ok: true, dogs }, { status: 200 });
  }  catch (error: any) {
  console.error("GET /api/dogs error:", error);
  return NextResponse.json(
    { ok: false, error: error?.message || "Failed to fetch dogs" },
    { status: 500 }
  );
}
    
  }


export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body?.name || !body?.breed || body?.age === undefined || !body?.contact) {
      console.log("contact value:", body.contact);
  return NextResponse.json(
    { ok: false, error: "name, breed, age, and contact are required" },
    { status: 400 }
  );
}
    

  const dog = await Dog.create({
  name: body.name?.trim(),
  breed: body.breed?.trim(),
  age: Number(body.age),
  location: (body.location || "").trim(),
  description: (body.description || "").trim(),
  contact: String(body.contact).trim(), 
  status: "open",
  imageUrl: (body.imageUrl || "").trim(),
});

    return NextResponse.json({ ok: true, dog }, { status: 201 });
  }  catch (error: any) {
  console.error("GET /api/dogs error:", error);
  return NextResponse.json(
    { ok: false, error: error?.message || "Failed to fetch dogs" },
    { status: 500 }
    );
  }
}