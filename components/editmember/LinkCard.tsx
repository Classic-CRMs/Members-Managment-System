import React from 'react';

type LinkedCustomer = {
  name: string;
  type: string;
  emoji: string;
};

const LinkedCard: React.FC = () => {
  const customers: LinkedCustomer[] = [
    { name: 'John Lincoln Doe', type: 'Customers that', emoji: '👨🏾' },
    { name: 'John Lincoln Doe', type: 'Customers that', emoji: '👨🏼' },
    { name: 'John Lincoln Doe', type: 'Customers that', emoji: '👨🏾' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mt-10">
      <h2 className="text-xl font-bold mb-2">Linked with</h2>
      <p className="text-gray-400 mb-6">Customers that buy products</p>
      
      <div className="space-y-2">
        {customers.map((customer, index) => (
          <div key={index} className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl mr-4">
              {customer.emoji}
            </div>
            <div>
              <p className="font-medium">{customer.name}</p>
              <p className="text-gray-400 text-xs">{customer.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedCard;