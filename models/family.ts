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
});

const family = mongoose.model("Family", FamilySchema, "families");

export default family;
