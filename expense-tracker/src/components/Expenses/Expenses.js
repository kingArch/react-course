import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [year, setYear] = useState('');
    const yearChanged = (value) => {
        setYear(value);
    };

    const filteredExpenses = props.expenses.filter((x) => x.date.getFullYear().toString() === year);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearChanged={yearChanged}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
};
export default Expenses;