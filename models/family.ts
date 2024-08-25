import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema(
  {
    familyName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    members: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          refPath: "members.memberType",
        },
        memberType: {
          type: String,
          required: true,
          enum: ["Member", "Child"],
        },
        isChild: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Family =
  mongoose.models.Family || mongoose.model("Family", FamilySchema, "Family");

export default Family;
