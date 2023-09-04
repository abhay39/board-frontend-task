import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
//   labels: ['Basic Tree', 'Custom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      label: 'Sales',
      data: [55,31,14],
      backgroundColor: [
        '#98D89E',
        '#F6DC7D',
        '#EE8484',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
