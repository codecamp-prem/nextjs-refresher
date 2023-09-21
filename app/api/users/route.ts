import { NextRequest, NextResponse } from "next/server";

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
  // validate the body, if not passed , return error
  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // 201 :
}
interface Props {
  params: { id: number };
}
// updating
export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
