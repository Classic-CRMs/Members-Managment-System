"use client"
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: '10', members: 85000 },
  { day: '11', members: 42000 },
  { day: '12', members: 65000 },
  { day: '13', members: 42000 },
  { day: '14', members: 55000 },
  { day: '15', members: 55000 },
  { day: '16', members: 83234 },
  { day: '17', members: 45000 },
  { day: '18', members: 50000 },
  { day: '19', members: 70000 },
  { day: '20', members: 65000 },
  { day: '21', members: 60000 },
  { day: '22', members: 48000 },
  { day: '23', members: 62000 },
  { day: '24', members: 59000 },
];

const MembersChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">members</h2>
        <select className="bg-gray-100 p-2 rounded">
          <option>This Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />
          <YAxis 
            tickFormatter={(value) => `${value / 1000}K`}
            domain={[20000, 100000]}
            ticks={[20000, 40000, 60000, 80000, 100000]}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip 
            formatter={(value) => [`${value.toLocaleString()}`, 'Members']}
            labelFormatter={(label) => `Day ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="members" 
            stroke="#8884d8" 
            fillOpacity={1} 
            fill="url(#colorMembers)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MembersChart;