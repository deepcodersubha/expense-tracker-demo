import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Income');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ amount, category, description });
        setAmount('');
        setCategory('Income');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div>
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
