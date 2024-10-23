'use client';

import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';
import { getProduct } from '@/lib/data';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => `Rs. ${value}`, // Format y-axis values as currency
        },
        grid: {
          drawBorder: true as any, // Type casting to bypass the error
          borderDash: [5, 5] as any, // Type casting to allow dashed lines
        } as any,
      },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', "Septmber", 'Octomber', 'November', 'December'];

const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      label: 'Revenue (in INR)',
      data: [5000, 8000, 7500, 10000, 12000, 14000, 11000, 9700, 15500 , 17000, 12200, 18000],
      backgroundColor: '#353535', 
      borderRadius: 10,
      borderSkipped: false, // Remove border-skipping on bar edges
    },
  ],
};

const RevenueChart = () => {
    // await getProduct();
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className='text-[14px] font-semibold text-gray-400'>Total Revenue</p>
      <h2 className="text-[20px] font-bold mb-4 text-gray-800">INR 980,273.00</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
