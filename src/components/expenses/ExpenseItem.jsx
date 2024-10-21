import { Button } from "../UI/Button";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({ title, amount, date,ddeleteExpenses }) => {
  return (
    <li className="li-style">
      <div className="date-title-div">
        <ExpenseDate date={date} />
        <p className="title">{title}</p>
      </div>

      <div>
        <p className="amount">$ {amount}</p>
        <Button onClick={ddeleteExpenses} >Delete</Button>
      </div>
    </li>
  );
};
