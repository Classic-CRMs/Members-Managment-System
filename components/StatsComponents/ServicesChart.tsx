'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      beginAtZero: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      data: [30, 40, 50, 35, 25, 35, 40, 60, 45, 40, 30, 45],
      backgroundColor: (context: any) => {
        const index = context.dataIndex;
        return index === 7 ? 'rgba(102, 51, 255, 1)' : 'rgba(230, 230, 250, 1)';
      },
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
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
      <div className="relative">
        <Bar options={options} data={data} height={200} />
        <div className="absolute top-8 right-32 bg-black text-white px-2 py-1 rounded-md text-sm">
          <span className="text-green-400">↗</span> 35%
        </div>
      </div>
    </div>
  );
};

export default ServicesChart;