// Charts.js
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './chart.css';


const Charts = ({ data }) => {
  useEffect(() => {
    
    return () => {
      if (window.chart) {
        window.chart.destroy();
      }
    };
  }, []);

  const generateChartData = (plantData) => {
    return {
      labels: ['KIET', 'KIEW', 'KIEK'],
      datasets: [
        {
          data: [plantData.KIET, plantData.KIEW, plantData.KIEK],
          backgroundColor: ['hsl(50, 0%, 50%)', '#cc99cc', 'hsl(200, 70%, 60%)'],
          hoverBackgroundColor: ['hsl(50, 0%, 50%)', '#cc99cc', 'hsl(200, 70%, 60%)'],
        },
      ],
    };
  };

  return (
    <div className="charts-container">
      {data.map((plant, index) => (
        <div key={index} className="chart-item">
          <h2>{`LOOK OF ${plant.title}`}</h2>
          <Pie data={generateChartData(plant)} />
        </div>
      ))}
    </div>
  );
};

export default Charts;