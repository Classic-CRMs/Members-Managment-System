import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await dbConnect();
    const member = await Member.findOne({ _id: id });
    return NextResponse.json(member);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching member ${error}` });
  }
}
