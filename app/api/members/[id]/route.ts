import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";
import mongoose from "mongoose";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await dbConnect();
    if (!id) {
      return NextResponse.json(
        { error: "Member Id is required" },
        { status: 400 }
      );
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid Member Id" }, { status: 400 });
    }
    const member = await Member.findOne({ _id: id });
    if (!member) {
      return NextResponse.json(
        { error: "Member with this Id not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(member);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching member ${error}` });
  }
}
