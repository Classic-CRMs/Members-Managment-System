import React from "react";

const EditMember: React.FC = () => {
  return (
    <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Basic Information
      </h2>
      <form>
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
              name="title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            >
              <option>Title</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="col-span-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            />
          </div>

          {/* Birth Date */}
          <div className="col-span-2">
            {/* <SelectDate/> */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              placeholder="Birth Date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            >
              <option>Gender</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div className="col-span-6 flex items-center space-x-2">
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
                disabled
              >
                <option>+251</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="345 567-23-56"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                disabled
              />
            </div>
          </div>

          {/* Disabilities */}
          <div className="col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Do you have disabilities?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="disabilities"
                  className="form-radio text-blue-500"
                  disabled
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="disabilities"
                  className="form-radio text-blue-500"
                  disabled
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Email Address */}
          <div className="col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            />
          </div>

          {/* Description */}
          <div className="md:col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Add some description of the project"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={4}
              disabled
            ></textarea>
          </div>

          {/* Upload Photo */}
          <div className="md:col-span-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Photo
            </label>
            <div className="flex items-center">
              <input
                type="file"
                className="w-full px-4 py-2 border outline-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                accept=".jpg,.png"
                disabled
              />
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
              id="subcity"
              name="subcity"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            >
              <option>Sub City</option>
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
              id="district"
              name="district"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled
            >
              <option>Woreda</option>
            </select>
          </div>

          {/* House Number */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              House Number
            </label>
            <input
              type="text"
              placeholder="H Num"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  focus:ring-blue-500 outline-none"
              disabled
            />
          </div>

          {/* Unique Name */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Unique Name
            </label>
            <input
              type="text"
              placeholder="unique name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMember;
