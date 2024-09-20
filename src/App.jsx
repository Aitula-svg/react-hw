import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";
import { LoginForm } from "./components/auth/LoginForm";
import IncreDecre from "./components/IncreDecre/IncreDecre";

function App() {
  const [expenses, setExpenses] = useState([]);

  const getNewExpenses = (newExpense) => {
    setExpenses([...expenses,newExpense]);
  }

  return (
    <div className="App">
      <NewExpense onNewExpenses={getNewExpenses} />
      <Expenses expenses={expenses} />
      <LoginForm />
      <IncreDecre />
    </div>
  );
}

export default App;
