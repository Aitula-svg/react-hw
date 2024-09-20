import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = ({ expenses = [] }) => {
  // console.log(expenses);

  return (
    <ul className="conteiner">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
