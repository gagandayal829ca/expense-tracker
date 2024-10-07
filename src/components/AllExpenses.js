import React from "react";

const AllExpenses = ({ expenses }) => {
  return (
    <div>
      <h1>All Expenses</h1>
      {expenses && expenses.length === 0 ? (
        <p>No expenses recorded</p>
      ) : (
        <ul className="list-group">
          {expenses.map((expense) => (
            <li key={expense.id} className="list-group-item">
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllExpenses;
