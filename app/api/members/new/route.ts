import { NextResponse } from "next/server";
import Member from "@/models/member";
import dbConnect from "@/config/db";

export async function POST(req: Request) {
  try {
    const newMember = await req.json();

    const newMemberObject = new Member(newMember);

    try {
      await dbConnect();
    } catch (dbError) {
      console.error("Database Connection Error:", dbError);
      return NextResponse.json(
        {
          error:
            "Database Connection Error: Unable to connect to the database.",
        },
        { status: 500 }
      );
    }

    try {
      await newMemberObject.save();
    } catch (saveError) {
      console.error("Database Save Error:", saveError);
      return NextResponse.json(
        { error: "Database Save Error: Unable to save the new member." },
        { status: 500 }
      );
    }

    return NextResponse.json(newMember);
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "Unexpected Error: An unexpected error occurred." },
      { status: 500 }
    );
  }
}
