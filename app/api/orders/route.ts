import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Order from "@/models/Order";

export async function GET() {
  await dbConnect();
  const orders = await Order.find().sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const order = await Order.create(data);
  return NextResponse.json(order, { status: 201 });
} 