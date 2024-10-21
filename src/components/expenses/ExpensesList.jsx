import { ExpenseItem } from "./ExpenseItem";


export const ExpensesList = ({ expenses = [],ddeleteExpenses }) => {
  return (
    <ul>
      {expenses.map((item) => (
        <ExpenseItem key={item.id}  ddeleteExpenses={ddeleteExpenses} {...item} />
      ))}
    </ul>
  );
};
