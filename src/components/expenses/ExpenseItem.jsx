import ExpenseDate from "./ExpenseDate";
import "./ExpenseList.css";

export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li className="li-style">
      <div className="date-title-div">
        <ExpenseDate date={date} />

        <p className="title">{title}</p>
      </div>
      <div>
        <p className="amout">${amount}</p>
      </div>
    </li>
  );
};
