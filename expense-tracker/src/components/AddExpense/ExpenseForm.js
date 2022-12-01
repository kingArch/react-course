import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    /**
     * Alternative is to have multiple useState 
     */
    const [state, setState] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        });
    };
    const amountChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        });
    };
    const dateChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                date: new Date(event.target.value)
            }
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.pushExpense(state);
    };
    const cancelHandler = () => {
        props.cancelExpense();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>amount</label>
                    <input type='number' onChange={amountChange} />
                </div>
                {/* 2-way-data-binding */}
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChange} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;