// import { useState } from "react";
// import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
// import { Card } from "../UI/Card";
// import { ExpensesList } from "./ExpensesList";
// import { Charts } from "../charts/Charts";

// export const Expenses = ({ expenses }) => {
//   const [selectValue, setSelectValue] = useState("2024");
//   const [sortedExpenses,setSorteredExpenses] = useState(expenses);

//   const selectChangeHandler = (event) => {
//     setSelectValue(event.target.value);
//   };

//   // const filteredExpenses = expenses.filter(
//   //   (item) => item.date.getFullYear().toString() === selectValue
//   // );

//   useEffect(() => {
//     const filtered = expenses.filter(
//       (item) => item.date.getFullYear().toString() === selectValue
//     );
//     setFilteredExpenses(filtered);
//   }, [selectValue, expenses]);

// const sortByAsc = () => {
//   const sorted = [...filteredExpenses].sort((a,b) => a.amount - b.amount);
//   setSorteredExpenses(sorted)
// }

//   return (
//     <Card>
//       <ExpenseFilter value={selectValue} onChange={selectChangeHandler} sortByAsc={sortByAsc}/>
//       <Charts expenses={expenses} />
//       {expenses.length === 0 ? (
//         <h1 style={{ color: "white" }}>No Expenses</h1>
//       ) : (
//         <ExpensesList expenses={filteredExpenses} />
//       )}
//     </Card>
//   );
// };

import { useState, useEffect } from "react";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Card } from "../UI/Card";
import { ExpensesList } from "./ExpensesList";
import { Charts } from "../charts/Charts";

export const Expenses = ({ expenses }) => {
  const [selectValue, setSelectValue] = useState("2024");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    const filtered = expenses.filter(
      (item) => item.date.getFullYear().toString() === selectValue
    );
    setFilteredExpenses(filtered);
  }, [selectValue, expenses]);

  
  const sortByAsc = () => {
    const sorted = [...filteredExpenses].sort((a, b) => a.amount - b.amount);
    setFilteredExpenses(sorted);
  };

  const sortPoUd = () => {
    const sorted = [...filteredExpenses].sort((a, b) => b.amount - a.amount);
    setFilteredExpenses(sorted);
  };

  const sortName = () => {
    const sorted = [...filteredExpenses].sort((a, b) =>
      a.title.localeCompare(b.tile)
    );
    setFilteredExpenses(sorted);
  };

  const sortNewOld = () => {
    const sorted = [...filteredExpenses].sort((a, b) => b.date - a.date);
    setFilteredExpenses(sorted); 
  };

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };

  const ddeleteExpenses = (id) => {
    setSelectValue(expenses.filter((item) => item.id !== id));
  }


  return (
    <Card>
      <ExpenseFilter
        value={selectValue}
        onChange={selectChangeHandler}
        sortByAsc={sortByAsc}
        sortPoUd={sortPoUd}
        sortName={sortName}
        sortNewOld={sortNewOld}
        
      />
      <Charts expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <h1 style={{ color: "white" }}>No Expenses</h1>
      ) : (
        <ExpensesList expenses={filteredExpenses} ddeleteExpenses={ddeleteExpenses} />
      )}
    </Card>
  );
};
