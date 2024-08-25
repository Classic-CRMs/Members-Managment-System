import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Child from "@/models/child";
import dbConnect from "@/config/db";

export async function GET(req: NextApiRequest, res: NextResponse) {
  try {
    await dbConnect();
    const children = await Child.find({}, { _id: 1, fullname: 1 });
    return NextResponse.json(children);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: `Error fetching Children ${error}` });
  }
}
