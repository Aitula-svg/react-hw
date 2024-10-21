import { Button } from "../UI/Button";
import "./ExpenseFilter.css";

export const ExpenseFilter = ({ onChange, value,sortByAsc,sortPoUd,sortName,sortNewOld }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* <label htmlFor="filterId" className="expense-filter_label">
          Фильтр по году
        </label> */}

        <Button onClick={sortPoUd}>по убыванию</Button>
        <Button onClick={sortByAsc} >по возрастанию</Button>
        <Button onClick={sortName}>по названию</Button>
        <button onClick={sortNewOld}>По новизне</button>

        <select
          id="filterId"
          className="expense-filter_select"
          onChange={onChange}
          value={value}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
