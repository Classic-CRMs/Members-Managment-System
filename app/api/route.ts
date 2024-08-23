import { NextResponse } from "next/server";

export async function GET() {
  try {
    const endpoints = {
      "GET:/api/members": "List all members",
      "GET:/api/members/:id": "Get a member by ID",
      "POST:/api/members/new": "Add new member",
      "GET:/api/children": "List all children",
      "POST:/api/children/new": "Add new child",
    };
    return NextResponse.json(endpoints);
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: `Error fetching ${error}`});
  }
}
