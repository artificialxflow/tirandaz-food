import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const product = await Product.findById(params.id);
  if (!product) return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const data = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, data, { new: true });
  if (!product) return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
  return NextResponse.json(product);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const product = await Product.findByIdAndDelete(params.id);
  if (!product) return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
  return NextResponse.json({ success: true });
} 