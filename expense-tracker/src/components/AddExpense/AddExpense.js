import { useState } from 'react';
import './AddExpense.css';
import AddExpensePanel from './AddExpensePanel';
import ExpenseForm from './ExpenseForm';
const AddExpense = (props) => {
    const [shown, setShown] = useState(true);

    const expenseAdded = (expense) => {
        props.expenseAdded(expense);
    };

    const shownTrigger = () => {
        setShown((prevShown) => !prevShown)
    };
    let content;
    if (shown) {
        content = <ExpenseForm pushExpense={expenseAdded} cancelExpense={shownTrigger}></ExpenseForm>
    } else {
        content = <AddExpensePanel addExpense={shownTrigger}></AddExpensePanel>
    }
    return (
        <div className='new-expense'>
            {content}
        </div>
    );
};

export default AddExpense;