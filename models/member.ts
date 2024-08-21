import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: { type: String, required: true },
  middlename: { type: String, required: true },
  lastname: { type: String, required: true },
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
  handicap: {
    has_handicap: { type: Boolean, required: true },
    handicap_type: { type: String },
  },
  birthdate: {
    date: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  education: [
    {
      field: { type: String, required: true },
      level: { type: String, required: true },
    },
  ],
  workinfo: [
    {
      work_type: { type: String, required: true },
      place: { type: String, required: true },
      responsibility: { type: String, required: true },
      profession: { type: String, required: true },
      talent: { type: String, required: true },
    },
  ],
  unioninfo: {
    area: { type: String, required: true },
  },
});

const Member =
  mongoose.models.Member || mongoose.model("Member", memberSchema, "members");

export default Member;
