import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    const expensesContent = props.filteredExpenses.length === 0 ?
        <p>NAH WE AINT GOT NO EXPENSE</p> :
        props.filteredExpenses.map((exp, index) => <ExpenseItem key={exp.id ?? props.filteredExpenses.length + index} expense={exp}></ExpenseItem>);
    return (
        <div>{expensesContent}</div>
    );
};

export default ExpensesList;