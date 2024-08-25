"use client"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'New Customers', value: 65 },
  { name: 'Existing Customers', value: 35 },
];

const COLORS = ['#FF6384', '#6733FF', '#E6E6FA'];

const AgesChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-1">ages</h2>
      <p className="text-gray-500 mb-4">Customers that buy products</p>
      <div className="relative" style={{ width: '200px', height: '280px', margin: '0 auto' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">65%</span>
          <span className="text-sm text-gray-500 text-center">
            Total New<br />Customers
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgesChart;