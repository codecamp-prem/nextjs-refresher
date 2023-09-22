import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params }: Props) {
  //fetch data from db, if not found return 404 error
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  return NextResponse.json(product);
}

// updating the product by product id
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  const update_product = await prisma.product.update({
    where: { id: product.id },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

// deleting the product
export async function DELETE(request: NextRequest, { params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!product)
    return NextResponse.json({ error: "product not found" }, { status: 404 });
  const delete_user = await prisma.product.delete({
    where: { id: product.id },
  });
  return NextResponse.json({});
}
