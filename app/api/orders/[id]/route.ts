import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/Order";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const order = await Order.findById(params.id);
  if (!order) return NextResponse.json({ error: "سفارش پیدا نشد" }, { status: 404 });
  return NextResponse.json(order);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const data = await req.json();
  const order = await Order.findByIdAndUpdate(params.id, data, { new: true });
  if (!order) return NextResponse.json({ error: "سفارش پیدا نشد" }, { status: 404 });
  return NextResponse.json(order);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const order = await Order.findByIdAndDelete(params.id);
  if (!order) return NextResponse.json({ error: "سفارش پیدا نشد" }, { status: 404 });
  return NextResponse.json({ success: true });
} 