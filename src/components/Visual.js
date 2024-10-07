import React from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ExpenseChart from "./ExpenseChart"; // Import your ExpenseChart component

// Register the necessary chart components and controllers
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const Visual = ({ expenses, chartData }) => {
  return (
    <div>
      <h1>Visual Representation of Expenses</h1>
      {/* Pass the chartData to the ExpenseChart component */}
      <ExpenseChart data={chartData} />
    </div>
  );
};

export default Visual;
