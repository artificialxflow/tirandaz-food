import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const user = await User.findById(params.id).select("-password");
  if (!user) return NextResponse.json({ error: "کاربر پیدا نشد" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const data = await req.json();
  if (data.password) data.password = await bcrypt.hash(data.password, 10);
  const user = await User.findByIdAndUpdate(params.id, data, { new: true }).select("-password");
  if (!user) return NextResponse.json({ error: "کاربر پیدا نشد" }, { status: 404 });
  return NextResponse.json(user);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const user = await User.findByIdAndDelete(params.id);
  if (!user) return NextResponse.json({ error: "کاربر پیدا نشد" }, { status: 404 });
  return NextResponse.json({ success: true });
} 