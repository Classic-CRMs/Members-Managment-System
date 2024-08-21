import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";
export async function POST(req: Request) {
  try {
    const newMember = await req.json();
    const newMemberObject = new Member(newMember);
    await dbConnect();
    await newMemberObject.save();
    return NextResponse.json(newMember);
  } catch (error) {
    console.error("Error saving new member:", error);
    return NextResponse.error();
  }
}
