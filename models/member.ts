import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fullname: { type: String, required: true },
  sex: { type: String, enum: ["Male", "Female"], required: true },
  address: {
    subcity: { type: String, required: true },
    district: { type: Number, required: true },
    homeno: { type: String },
    neighborhood: { type: String },
  },
  contact: {
    homephone: { type: String },
    personalphone: { type: String, required: true },
    email: { type: String },
  },
  image: { type: String,  required: true },
  handicap: {
    has_handicap: { type: Boolean, required: true },
    handicap_type: { type: String },
  },
  birthdate: {
    type: String,
    required: true,
  },
});

const Member =
  mongoose.models.Member || mongoose.model("Member", memberSchema, "members");

export default Member;
