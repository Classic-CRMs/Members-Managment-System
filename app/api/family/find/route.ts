import { NextResponse } from "next/server";
import Family from "@/models/family";
import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();
    const families = await Family.find({}, { _id: 1, familyName: 1 });
    return NextResponse.json(families);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching Families ${error}` });
  }
}
