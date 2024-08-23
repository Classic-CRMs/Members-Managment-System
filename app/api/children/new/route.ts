import { NextResponse } from "next/server";
import Child from "@/models/child";
import dbConnect from "@/config/db";
import mongoose from "mongoose";

export async function POST(req: Request) {
  try {
    const newChild = await req.json();
    if (!mongoose.Types.ObjectId.isValid(newChild.family_id)) {
      return NextResponse.json(
        { error: "Family ID Invalid" },
        { status: 400 }
      );
    }
    const newChildObject = new Child(newChild);

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
      await newChildObject.save();
    } catch (saveError) {
      console.error("Database Save Error:", saveError);
      return NextResponse.json(
        { error: "Database Save Error: Unable to save the new member." },
        { status: 500 }
      );
    }

    return NextResponse.json(newChild);
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "Unexpected Error: An unexpected error occurred." },
      { status: 500 }
    );
  }
}
