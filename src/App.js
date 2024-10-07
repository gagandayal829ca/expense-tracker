import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllExpenses from "./components/AllExpenses";
import Visual from "./components/Visual";

const App = () => {
  // Define your data for the chart
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 300 },
    { id: 2, amount: 500 },
    { id: 3, amount: 100 },
    // Add more expense objects as needed
  ]);

  // Extract the amounts from expenses for the chart
  const chartData = expenses.map((expense) => expense.amount);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route
            path="/expenses"
            element={<AllExpenses expenses={expenses} />}
          />
          <Route
            path="/visual"
            element={<Visual expenses={expenses} chartData={chartData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
