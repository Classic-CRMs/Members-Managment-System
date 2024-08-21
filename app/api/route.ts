import { NextResponse } from "next/server";

export async function GET() {
  const endpoints = {
    "GET:/api/members": "List all members",
    "GET:/api/members/:id": "Get a member by ID",
    "POST:/api/members/add": "Create a new member",
  };
  return NextResponse.json(endpoints);
}
