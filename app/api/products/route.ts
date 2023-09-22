import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // validate the body, if not passed , return error
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // product name should be unique as per our schema.prisma
  const check_unique_product_name = await prisma.product.findUnique({
    where: { name: body.name },
  });

  if (check_unique_product_name)
    return NextResponse.json(
      { error: "Product already exist" },
      { status: 400 }
    );

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(product, { status: 201 }); // 201 : created
}
