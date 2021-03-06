import { React, useState } from 'react'
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";



const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  function clickHandler() {
    setTitle('hello, dude')

    setTimeout(() => setTitle(title), 2000)
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price" >{props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;