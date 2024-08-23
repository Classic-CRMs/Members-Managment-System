import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  birthdate: {
    date: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  sunday_school_class: {
    type: String,
    required: true,
  },
  dvbs_class: { type: String, required: true },
  grade: { type: String, required: true },
  family_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Family",
  },
});

const Child =
  mongoose.models.Child || mongoose.model("Child", ChildSchema, "children");

export default Child;
