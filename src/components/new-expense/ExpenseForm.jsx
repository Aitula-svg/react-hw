import { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import "./ExpenseForm.css";

export const ExpenseForm = ({ onShow, onNewExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Date.now().toString(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onNewExpenses(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-second">
          <FormInput
          className="text"
            inputType="text"
            labelText="Загаловок" 
            onChange={handleTitleChange}
            value={title}
          />
        </div>
          <div  className="form-second">
        <FormInput
          inputType="number"
          labelText="Количество"
          onChange={handleAmountChange}
          value={amount}
        />
        </div>
      </div>
      <div className="form-two">
        <FormInput
          inputType="date"
          labelText="Датировать"
          onChange={handleDateChange}
          value={date}
        />
      </div>

 <div className="button-head">
 <Button className="button-first" type={"button"} onClick={onShow}>
        Отмена
      </Button>
      <Button className="button-second" type={"submit"}>Добавить росходы</Button>
 </div>
    </form>
  );
};
