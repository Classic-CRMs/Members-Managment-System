import dbConnect from "@/config/db";
import { NextResponse } from "next/server";
import Member from "@/models/member";

export async function POST(req: Request) {
  const newMember = await req.json();
  const newMemberObject = new Member(newMember);
  await dbConnect();
  await newMemberObject.save();
  return NextResponse.json(newMember);
}
