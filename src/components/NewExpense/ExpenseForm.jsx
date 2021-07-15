import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = event => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setDate(event.target.value);
    };

    const submitFormHandler = event => {
        event.preventDefault();
        
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        };

        props.onSaveData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form action="" onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.item}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;