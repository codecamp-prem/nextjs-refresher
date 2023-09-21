import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // request: NextRequest prevent caching
  // fetch from db, for now hard coded
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
}
