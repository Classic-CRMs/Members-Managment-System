"use client";
import { useCallback, useState } from "react";
// import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { childType, genderType, memberType, titleType } from "@/types/types";
import uploadImage from "@/utils/imageUploader";
import {  validator2 } from "@/utils/validator";
const BasicInformationForm: React.FC = () => {
  //   const router = useRouter();
  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<genderType>("Male");
  const [familyID, setFamilyID] = useState<string>("");
  const [disabilities, setDisabilities] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [sundaySchoolClass, setSundaySchoolClass] = useState<string>("");
  const [DVBSClass, setDVBSClass] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [showErrors, setShowErrors] = useState<any>({});

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setPhoto(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, errors } = validator2({
      fullName,
      birthDate,
      familyID,
      disabilities,
      description,
      sundaySchoolClass,
      dvbsClass: DVBSClass,
      grade,
      photo,
    });

    if (!isValid) {
      setShowErrors(errors);
      console.log(showErrors);
      return;
    }
    const image = await uploadImage(photo!);

    const newChild: childType = {
      fullname: fullName,
      birthdate: birthDate,
      sex: gender,
      image: image,
      handicap: { has_handicap: disabilities, handicap_type: description },
      family_id: familyID,
      sunday_school_class: sundaySchoolClass,
      dvbs_class: DVBSClass,
      grade: grade,
    };

    try {
      const res = await fetch("http://localhost:3000/api/children/new", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newChild),
      });

      if (!res.ok) {
        throw new Error("Failed to add a Child");
      } else {
        console.log("Child added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Basic Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {/* Full Name */}
          <div className="col-span-4">
            <label
              className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.fullName && "text-red-500"
              }`}
            >
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.fullName && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />
            {showErrors.fullName && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.fullName}
              </p>
            )}
          </div>

          {/* Birth Date */}
          <div className="col-span-2">
            {/* <SelectDate/> */}
            <label
              className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.birthDate && "text-red-500"
              }`}
            >
              Birth Date
            </label>
            <input
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
              placeholder="Birth Date"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.birthDate && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />
            {showErrors.birthDate && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.birthDate}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="col-span-2 relative inline-block">
            <label
              htmlFor="gender"
              className="block my-2 text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as genderType)}
              className="block appearance-none w-full h-12 px-4 py-2 border shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center align-middle px-2 text-gray-600">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>

          {/* Disabilities */}
          <div className="col-span-4">
            <label className="block my-2 text-sm font-medium text-gray-700">
              Do you have disabilities?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  value="true"
                  type="radio"
                  name="disabilities"
                  className="form-radio text-blue-500"
                  checked={disabilities === true}
                  onChange={(e) => setDisabilities(e.target.value === "true")}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  value="false"
                  type="radio"
                  name="disabilities"
                  className="form-radio text-blue-500"
                  checked={disabilities === false}
                  onChange={(e) => setDisabilities(e.target.value === "true")}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

              {/* FamilyId */}
          <div className="col-span-4">
            <label className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.familyID && "text-red-500"
              }`}>
              Family ID
            </label>
            <input
              value={familyID}
              onChange={(e) => setFamilyID(e.target.value)}
              type="text"
              placeholder="Family ID"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.familyID && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />{showErrors.familyID && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.familyID}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-4">
            {disabilities && (
              <>
                <label
                  className={`block my-2 text-sm font-medium text-gray-700 ${
                    showErrors.handicap && "text-red-500"
                  }`}
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add some description of the project"
                  className={`block w-full px-4 py-2 border ${
                    showErrors.handicap && "border-red-500"
                  } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
                  rows={4}
                ></textarea>
                {showErrors.handicap && (
                  <p className="text-red-500 text-sm ml-1 mt-1">
                    {showErrors.handicap}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Upload Photo - Updated to use react-dropzone */}
          <div className="md:col-span-4">
            <label className={`block my-2 text-sm font-medium text-gray-700 ${showErrors.photo && "text-red-500"}`}>
              Upload Photo
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 h-28 flex justify-center items-center text-center cursor-pointer ${showErrors.photo && "border-red-500"} ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}

            >
              <input {...getInputProps()} />
              {photo ? (
                <p>Photo selected: {photo.name}</p>
                ) : isDragActive ? (
                  <p>Drop the photo here ...</p>
                  ) : (
                    <p>Drag n drop a photo here, or click to select</p>
                    )}
            </div>
                    {showErrors.photo && <p className="text-red-500 ml-2 mt-1">{showErrors.photo}</p>}
          </div>

          <div className="col-span-3">
            <label className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.sundaySchoolClass && "text-red-500"
              }`}>
              Sunday School Class
            </label>
            <input
              value={sundaySchoolClass}
              onChange={(e) => setSundaySchoolClass(e.target.value)}
              type="text"
              placeholder="Sunday School Class"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.sundaySchoolClass && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />{showErrors.sundaySchoolClass && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.sundaySchoolClass}
              </p>
            )}
          </div>

          {/* DVBS Class */}
          <div className="col-span-3">
            <label className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.dvbsClass && "text-red-500"
              }`}>
              DVBS class
            </label>
            <input
              value={DVBSClass}
              onChange={(e) => setDVBSClass(e.target.value)}
              type="text"
              placeholder="DVBS class"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.dvbsClass && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />{showErrors.dvbsClass && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.dvbsClass}
              </p>
            )}
          </div>

          {/* School Grade */}
          <div className="col-span-2">
            <label className={`block my-2 text-sm font-medium text-gray-700 ${
                showErrors.grade && "text-red-500"
              }`}>
              School Grade
            </label>
            <input
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              type="text"
              placeholder="School Grade"
              className={`block w-full h-12 px-4 py-2 border ${
                showErrors.grade && "border-red-500"
              } shadow-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:shadow-sm outline-none`}
            />{showErrors.grade && (
              <p className="text-red-500 text-sm ml-1 mt-1">
                {showErrors.grade}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default BasicInformationForm;
