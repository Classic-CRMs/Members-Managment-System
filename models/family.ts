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
        },

        isChild: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Family =
  mongoose.models.Family || mongoose.model("Family", FamilySchema, "families");

export default Family;
