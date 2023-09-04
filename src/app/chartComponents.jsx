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

export const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: 'none'
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['Week 1', 'Week 2','Week 3','Week 4'];

export const data = {
  labels,
  datasets: [
    {
      label: 'User',
      data: [500,450,200,400],
      backgroundColor: '#98D89E',
    },
    {
      label: 'Guest',
      data: [400,350,300,350],
      backgroundColor: '#EE8484'
    },
  ],
};

export function ChartComponent() {
  return(
    <div style={{minWidth:'90%',minHeight:'240px',marginTop:-10}}>
      <Bar options={options} data={data} />
    </div>
  );
}
