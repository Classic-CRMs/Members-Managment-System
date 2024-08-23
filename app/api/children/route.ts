import { NextResponse } from "next/server";
import Child from "@/models/child";
import dbConnect from "@/config/db";

export async function GET(req: Request) {
  try {
    await dbConnect();
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }

  try {
    const children = await Child.find();
    return NextResponse.json(children);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json({ error: "Error fetching members" }, { status: 500 });
  }
}
