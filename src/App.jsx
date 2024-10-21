import { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";

const DYMMY_EXPENSES = [
  {
    id: "e1",
    title: 'Hello I"m from 2024',
    amount: 200,
    date: new Date(),
  },
  {
    id: "e2",
    amount: 200,

    title: 'Hello I"m from 2023',
    date: new Date("21.09.2023"),
  },
];

function App() {
  const [expenses, setExpenses] = useState([]);

  const getNewExpenses = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="App">
      <NewExpense onNewExpenses={getNewExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

//! Conditional Rendering
//! State bathcing
//! Two way data  binding
//! Lifting Up Props
