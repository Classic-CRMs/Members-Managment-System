import { NextResponse } from "next/server";
import Child from "@/models/child";
import dbConnect from "@/config/db";
import mongoose from "mongoose";
import Family from "@/models/family";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const newChildData = await req.json();

    if (!mongoose.Types.ObjectId.isValid(newChildData.family_id)) {
      return NextResponse.json({ error: "Invalid Family ID" }, { status: 400 });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const newChildObject = new Child(newChildData);
      const savedChild = await newChildObject.save({ session });

      const familyId = newChildData.family_id;
      const family = await Family.findByIdAndUpdate(
        familyId,
        { $push: { members: { _id: savedChild._id, isChild: true } } },
        { new: true, session }
      );

      if (!family) {
        await session.abortTransaction();
        return NextResponse.json(
          { error: "Family Not Found" },
          { status: 404 }
        );
      }

      await session.commitTransaction();

      return NextResponse.json(savedChild);
    } catch (error: unknown) {
      await session.abortTransaction();
      console.error("Error During Transaction:", error);
      return NextResponse.json(
        { error: "Error During Transaction: Unable to process the request." },
        { status: 500 }
      );
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { error: "Unexpected Error: An unexpected error occurred." },
      { status: 500 }
    );
  }
}
