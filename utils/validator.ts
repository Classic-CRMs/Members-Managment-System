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
