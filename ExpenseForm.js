import React,{ useState } from 'react'
import './NewExpense.css'

export default function ExpenseForm() {
    const[changedTitle,setTitle]=useState('');
    const[changedAmount,setAmount]=useState('');
    const[changedDate,setDate]=useState('');
    function titleHandler(event){
        console.log(event.target.value);
        setTitle(event.target.value);
    }
    function amountHandler(event){
        console.log(event.target.value);
        setAmount(event.target.value);
    }
    function dateHandler(event){
        console.log(event.target.value  );
        setDate(event.target.value);
    }

    function submitHander(event){
        const formData={
            title:changedTitle,
            amount:changedAmount,
            date:new Date(changedDate)
        }
      
       console.log(formData);
    }



  return (
    <form onSubmit={submitHander}>
    <div className='form-expense__controls'>
    <div className='form-expense__control'>
        <label >Expense-Title</label>
        <input type="text" onChange={titleHandler} id='title'/>
     </div>

     <div className='form-expense__control'>
        <label>Expense-Amount</label>
        <input type="text" min="0.01" step="0.01" onChange={amountHandler} id='amount'/>
     </div>

     <div className='form-expense__control'>
        <label>Expense-Date</label>
        <input type="text" min="01-01-2019" max="31-12-2023" onChange={dateHandler} id='date'/>
     </div>

     <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
     </div>
      
        </div>
    </form>
   
  )
}
