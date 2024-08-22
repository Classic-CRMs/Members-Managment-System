'use client'
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FamilyForm: React.FC = () => {
  const [familyHead, setFamilyHead] = useState('');
  const [members, setMembers] = useState(['']);
  const [children, setChildren] = useState(['']);
  const [image, setImage] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
  });

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleAddChild = () => {
    setChildren([...children, '']);
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleChildChange = (index: number, value: string) => {
    const newChildren = [...children];
    newChildren[index] = value;
    setChildren(newChildren);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('familyHead', familyHead);
    members.forEach((member, index) => {
      formData.append(`member${index}`, member);
    });
    children.forEach((child, index) => {
      formData.append(`child${index}`, child);
    });
    if (image) {
      formData.append('image', image);
    }

    
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Family Head</label>
            <input
              type="text"
              value={familyHead}
              onChange={(e) => setFamilyHead(e.target.value)}
              placeholder="Add member ID or name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Add members</label>
            {members.map((member, index) => (
              <input
                key={index}
                type="text"
                value={member}
                onChange={(e) => handleMemberChange(index, e.target.value)}
                placeholder="Enter member ID or name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
            ))}
            <button onClick={handleAddMember} className="text-blue-500 hover:text-blue-600">+ Add another member</button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Add Child</label>
            {children.map((child, index) => (
              <input
                key={index}
                type="text"
                value={child}
                onChange={(e) => handleChildChange(index, e.target.value)}
                placeholder="Enter Child ID or name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
            ))}
            <button onClick={handleAddChild} className="text-blue-500 hover:text-blue-600">+ Add another child</button>
          </div>
        </div>
        <div>
          <div className="border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">Select image</h3>
            <p className="text-sm text-gray-600 mb-4">Select or upload an avatar for the project (available formats: jpg, png)</p>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
            >
              <input {...getInputProps()} />
              {image ? (
                <p>Image selected: {image.name}</p>
              ) : isDragActive ? (
                <p>Drop the image here ...</p>
              ) : (
                <div>
                  <svg className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-1">Drag 'n' drop an image here, or click to select</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Save Family
        </button>
      </div>
    </div>
  );
};

export default FamilyForm;