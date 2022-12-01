import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import { useState } from 'react';
const ExpenseItem = (props) => {

    const [state, setState] = useState(props.expense)
    const expense = state;
    const { title, date, amount } = expense;

    const changeTitle = () => {
        console.log(state)
        setState({
            ...state,
            title: 'Updated'
        })
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    );
};
export default ExpenseItem;