import {Card} from "../UI/Card"
import { ExpensesList } from "./ExpensesList";

export const Expenses = ({ expenses }) => {
  return (
    <Card className="card">
      {expenses?.length === 0 ? (
        <h1>No exnenses</h1>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </Card>
  );
};
