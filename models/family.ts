import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parents: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
      },
    ],
  },
  children: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Child",
      },
    ],
  },
}, { timestamps: true });

const Family =
  mongoose.models.Family || mongoose.model("Family", FamilySchema, "Family");


export default Family;
