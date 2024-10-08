import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true
  },
  handicap: {
    has_handicap: { type: Boolean, required: true },
    handicap_type: { type: String },
  },
  sunday_school_class: {
    type: String,
    required: true,
  },
  image: {type: String, required: true},
  dvbs_class: { type: String, required: true },
  grade: { type: String, required: true },
}, { timestamps: true });

const Child =
  mongoose.models.Child || mongoose.model("Child", ChildSchema, "children");

export default Child;
