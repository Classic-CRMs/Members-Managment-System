import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";

export async function GET(req: Request) {
  await dbConnect();
  const members = await Member.find();
  return NextResponse.json(members);
}


