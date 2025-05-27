import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  await dbConnect();
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  if (!data.password) return NextResponse.json({ error: "رمز عبور الزامی است" }, { status: 400 });
  data.password = await bcrypt.hash(data.password, 10);
  const user = await User.create(data);
  user.password = undefined;
  return NextResponse.json(user, { status: 201 });
} 