import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";

export async function GET(req: Request) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }

  try {
    const members = await Member.find();
    return NextResponse.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ error: "Error fetching members" }, { status: 500 });
  }
}
