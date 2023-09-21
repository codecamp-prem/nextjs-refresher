import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // request: NextRequest prevent caching
  // fetch from db, for now hard coded
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // validate the body, if not passed , return error
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // 201 :
}
interface Props {
  params: { id: number };
}

// deleting the user
export function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
}
