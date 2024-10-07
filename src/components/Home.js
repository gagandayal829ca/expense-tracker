import React, { useState } from "react";

const Home = ({ expenses, setExpenses }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id === null) {
      // Create new expense
      setExpenses([...expenses, { ...formData, id: Date.now() }]);
    } else {
      // Edit existing expense
      setExpenses(
        expenses.map((expense) =>
          expense.id === formData.id ? formData : expense
        )
      );
    }

    setFormData({ description: "", amount: "", id: null });
  };

  const handleEdit = (expense) => {
    setFormData(expense);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Add/Edit Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {formData.id ? "Edit Expense" : "Add Expense"}
        </button>
      </form>

      <h2 className="mt-4">Current Expenses</h2>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-group-item">
            {expense.description}: ${expense.amount}
            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={() => handleEdit(expense)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger ml-2"
              onClick={() => handleDelete(expense.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
