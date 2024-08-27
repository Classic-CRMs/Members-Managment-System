import { errorTypes } from "@/types/types";

export const validator = ({
  fullName,
  birthDate,
  mobileNumber,
  email,
  subCity,
  woreda,
  houseNumber,
  disabilities,
  description,
  photo,
}: any): { isValid: boolean; errors: errorTypes } => {
  const errors = {} as errorTypes;
  //check required fields
  if (!fullName.trim()) {
    errors["fullName"] = "Full name is required";
  }
  if (!birthDate.trim()) {
    errors["birthDate"] = "Birth Date is required";
  }
  if (!mobileNumber.trim()) {
    errors["mobileNumber"] = "Mobile number is required";
  }
  if (!email.trim()) {
    errors["email"] = "Email is required";
  }
  if (!subCity.trim()) {
    errors["subCity"] = "Subcity is required";
  }
  if (!woreda.trim()) {
    errors["woreda"] = "Woreda is required";
  }
  if (!houseNumber.trim()) {
    errors["houseNumber"] = "House number is required";
  }
  if (!photo) {
    errors["photo"] = "Photo is required";
  }
  //email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.trim() && !emailRegex.test(email)) {
    errors["email"] = "Invalid email format";
  }

  //mobile number validation
  const mobileRegex = /^[0-9]{10}$/;
  if (mobileNumber.trim() && !mobileRegex.test(mobileNumber)) {
    errors["mobileNumber"] = "Invalid mobile number format";
  }

  //birth date validation
  const currentDate = new Date();
  const selectedDate = new Date(birthDate);
  if (selectedDate > currentDate) {
    errors["birthDate"] = "Birth date cannot be in the future";
  }
  if (disabilities && !description.trim()) {
    errors["handicap"] = "Description is required when disabilites is selected";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};


export const validator2 = ({
  fullName,
  birthDate,
  familyID,
  sundaySchoolClass,
  dvbsClass,
  grade,
  disabilities,
  description,
  photo,
}: any): { isValid: boolean; errors: errorTypes } => {
  const errors = {} as errorTypes;
  //check required fields
  if (!fullName.trim()) {
    errors["fullName"] = "Full name is required";
  }
  if (!birthDate.trim()) {
    errors["birthDate"] = "Birth Date is required";
  }
  if (!sundaySchoolClass.trim()) {
    errors["sundaySchoolClass"] = "sunday school class is required";
  }
  if (!dvbsClass.trim()) {
    errors["dvbsClass"] = "DVBS class is required";
  }
  if (!grade.trim()) {
    errors["grade"] = "school grade is required";
  }
  if (!photo) {
    errors["photo"] = "Photo is required";
  }

  //family id validation: mongodb id
  const familyIdRegex = /^[0-9a-fA-F]{24}$/;
  if (familyID.trim() && !familyIdRegex.test(familyID)) {
    errors["familyID"] = "Invalid family ID format";
  }
  //birth date validation
  const currentDate = new Date();
  const selectedDate = new Date(birthDate);
  if (selectedDate > currentDate) {
    errors["birthDate"] = "Birth date cannot be in the future";
  }
  if (disabilities && !description.trim()) {
    errors["handicap"] = "Description is required when disabilites is selected";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}