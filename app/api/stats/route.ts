import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Member from "@/models/member";
import child from "@/models/child";
import dbConnect from "@/config/db";

export async function GET(req: NextApiRequest, res: NextResponse) {
  try {
    await dbConnect();
    const membersCount = await Member.countDocuments();
    const childrenCount = await child.countDocuments();

    return NextResponse.json({ membersCount, childrenCount });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching member ${error}` });
  }
}
