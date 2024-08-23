"use client"
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 50 },
  { month: 'Apr', value: 35 },
  { month: 'May', value: 25 },
  { month: 'Jun', value: 35 },
  { month: 'Jul', value: 40 },
  { month: 'Aug', value: 60 },
  { month: 'Sep', value: 45 },
  { month: 'Oct', value: 40 },
  { month: 'Nov', value: 30 },
  { month: 'Dec', value: 45 },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, index } = props;
  const fill = index === 7 ? '#6633ff' : '#e6e6fa';
  const radius = 5;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
    </g>
  );
};

const ServicesChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">services</h2>
          <p className="text-gray-500">Monthly Earning</p>
        </div>
        <select className="bg-gray-100 p-2 rounded">
          <option>Quarterly</option>
        </select>
      </div>
      <div className="relative" style={{ height: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black text-white px-2 py-1 rounded-md text-sm">
                      <span className="text-green-400">↗</span> 35%
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="value" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServicesChart;