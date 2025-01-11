import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const totalIncome = expenses.reduce((sum, exp) => exp.category === 'Income' ? sum + parseFloat(exp.amount) : sum, 0);
  const totalExpense = expenses.reduce((sum, exp) => exp.category === 'Expense' ? sum + parseFloat(exp.amount) : sum, 0);

  return (
    <div>
      <h3>Total Income: {totalIncome}</h3>
      <h3>Total Expenses: {totalExpense}</h3>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>{exp.description}</td>
              <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
