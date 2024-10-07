import React, { useRef, useEffect } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components and controllers
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const ExpenseChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      if (chartRef.current) {
        // Destroy the previous chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Create a new chart instance
        chartInstanceRef.current = new Chart(chartRef.current, {
          type: "doughnut",
          data: {
            labels: ["Category 1", "Category 2", "Category 3"],
            datasets: [
              {
                label: "Expenses",
                data: data, // Data passed as props
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    };

    // Create the chart on mount and when the data prop changes
    createChart();

    // Cleanup function to destroy chart when component unmounts or before rerender
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]); // Re-run the effect when `data` changes

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ExpenseChart;
