import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ chartData }) => {
  return (
    <>
      <Bar data={chartData}   
      options= {{
        title: {
          display: true,
          text: 'Category',
          fotnSize: 20,
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: 'rgb(255, 99, 132)',
            },
          },
        },
      }}/>
    
    </>
  );
};

export default Chart;
