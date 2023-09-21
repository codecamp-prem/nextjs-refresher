import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params }: Props) {
  //fetch data from db, if not found return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  return NextResponse.json([{ id: 1, name: "fish & chip", price: 5.6 }]);
}

// updating the product by product id
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}
