'use client'
import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiX } from 'react-icons/fi';

type Customer = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: 'Active' | 'Inactive';
};

const CustomerList: React.FC = () => {
  const [customers] = useState<Customer[]>([
    { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    // Add more customer data as needed
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">All Customers</h2>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
            All time <FiX className="ml-2 cursor-pointer" />
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
            US, AU, +4 <FiX className="ml-2 cursor-pointer" />
          </span>
          <button className="border border-gray-300 px-3 py-1 rounded-md flex items-center">
            More filters <FiChevronDown className="ml-2" />
          </button>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Member Name</th>
            <th className="pb-2">Company</th>
            <th className="pb-2">Phone Number</th>
            <th className="pb-2">Email</th>
            <th className="pb-2">Country</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3">{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;