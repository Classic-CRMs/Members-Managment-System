"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  cutout: '70%',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const data = {
  datasets: [
    {
      data: [65, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(230, 230, 250, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const PieChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-1">ages</h2>
      <p className="text-gray-500 mb-4">Customers that buy products</p>
      <div className="relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">65%</span>
          <span className="text-sm text-gray-500 text-center">Total New<br />Customers</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;