import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";


export async function GET(req: NextApiRequest, res: NextResponse) {
  try {
    await dbConnect();
    const members = await Member.find({}, { _id: 1, fullname: 1 });
    return NextResponse.json(members);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching members ${error}` });
  }
}
