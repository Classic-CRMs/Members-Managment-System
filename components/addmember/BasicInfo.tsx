"use client";
import { useCallback, useState } from "react";
// import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { genderType, memberType, titleType } from "@/types/types";
import uploadImage from "@/utils/imageUploader";
const BasicInformationForm: React.FC = () => {
  //   const router = useRouter();
  const [title, setTitle] = useState<titleType>("Mr.");
  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [gender, setGender] = useState<genderType>("Male");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [disabilities, setDisabilities] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [subCity, setSubCity] = useState<string>("Yeka");
  const [woreda, setWoreda] = useState<string>("1");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [uniqueName, setUniqueName] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);

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
    const image = await uploadImage(photo!);
  
    const newMember: memberType = {
      title,
      fullname: fullName,
      birthdate: birthDate,
      sex: gender,
      image,
      contact: { homephone: houseNumber, personalphone: mobileNumber, email },
      handicap: { has_handicap: disabilities, handicap_type: description },
      address: {
        subcity: subCity,
        district: woreda,
        homeno: houseNumber,
        neighborhood: uniqueName,
      },
    };

    try {
      const res = await fetch("http://localhost:3000/api/members/new", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newMember),
      });

      if (!res.ok) {
        throw new Error("Failed to add a Member");
      } else {
        console.log("Member added successfully");
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
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <select
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value as titleType)}
              name="title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
              <option value="Miss">Miss</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Sir">Sir</option>
              <option value="Madam">Madam</option>
              <option value="Rev.">Rev.</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="col-span-3">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Birth Date */}
          <div className="col-span-2">
            {/* <SelectDate/> */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
              placeholder="Birth Date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Gender */}
          <div className="col-span-2">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as genderType)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div className="col-span-4 flex items-center space-x-2">
            <div>
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Code
              </label>
              <select
                id="code"
                name="code"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>+251</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                type="tel"
                placeholder="345 567-23-56"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Disabilities */}
          <div className="col-span-8">
            <label className="block mb-2 text-sm font-medium text-gray-700">
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
          {/* Description */}
          <div className="md:col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add some description of the project"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={4}
            ></textarea>
          </div>

          {/* Upload Photo - Updated to use react-dropzone */}
          <div className="md:col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Photo
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 h-28 flex justify-center items-center text-center cursor-pointer ${
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
          </div>

          {/* Sub City */}
          <div className="col-span-2">
            <label
              htmlFor="subcity"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Sub City
            </label>
            <select
              value={subCity}
              onChange={(e) => setSubCity(e.target.value)}
              id="subcity"
              name="subcity"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Yeka">Yeka</option>
              <option value="Arada">Arada</option>
            </select>
          </div>

          {/* Woreda */}
          <div className="col-span-2">
            <label
              htmlFor="district"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Woreda
            </label>
            <select
              value={woreda}
              onChange={(e) => setWoreda(e.target.value)}
              id="district"
              name="district"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
            </select>
          </div>

          {/* House Number */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              House Number
            </label>
            <input
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              type="text"
              placeholder="H Num"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Unique Name */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Unique Name
            </label>
            <input
              type="text"
              value={uniqueName}
              onChange={(e) => setUniqueName(e.target.value)}
              placeholder="unique name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
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
