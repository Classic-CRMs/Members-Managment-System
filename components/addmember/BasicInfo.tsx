import React from 'react';

const BasicInformationForm: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Basic Information</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option>Title</option>
                        </select>
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Birth Date */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Birth Date</label>
                        <input
                            type="date"
                            placeholder="Birth Date"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option>Gender</option>
                        </select>
                    </div>

                    {/* Mobile Number */}
                    <div className="flex items-center space-x-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Country Code</label>
                            <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>+1</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
                            <input
                                type="text"
                                placeholder="345 567-23-56"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="youremail@gmail.com"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Disabilities */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Do you have disabilities?</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input type="radio" name="disabilities" className="form-radio text-blue-500" />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="disabilities" className="form-radio text-blue-500" />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            placeholder="Add some description of the project"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Upload Photo */}
                    <div className="md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Upload Photo</label>
                        <div className="flex items-center">
                            <input
                                type="file"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                accept=".jpg,.png"
                            />
                        </div>
                    </div>

                    {/* Sub City */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Sub City</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option>Sub City</option>
                        </select>
                    </div>

                    {/* Woreda */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Woreda</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option>Woreda</option>
                        </select>
                    </div>

                    {/* House Number */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">House Number</label>
                        <input
                            type="text"
                            placeholder="H Num"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Unique Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Unique Name</label>
                        <input
                            type="text"
                            placeholder="unique name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-600"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BasicInformationForm;
