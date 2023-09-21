import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params }: Props) {
  //fetch data from db, if not found return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json([{ id: 1, name: "John Doe" }]);
}
