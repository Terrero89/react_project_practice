import ExpenseDate from "./ExpenseDate.js";
import React, { useState } from 'react'

import "./ExpenseItem.css";
import Card from "../UI/Card.js";


const ExpenseItem = (props) => {
  /* useState is a hook to make state changes possible
   * title: name of old variable.
   * setTitle: name of new title variable. conventinal name used to make the new state of the event change,click etc..
   *[title,setTitle] return an array with old and new values.
   * const does not affect constructor because doesnot have the = sign 
  */

  const [title, setTitle] = useState(props.title); //? useState always returns an array, with thos two elements, old and new state.
  console.log('expense item ')
  
  const clickHandler = () => {
  
    setTitle('updated');
    console.log(title);

  } //? convention used to call event click,hover ending in Handler

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