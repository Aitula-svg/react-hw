import React from "react";
import { useState } from "react";
import "./TodoForm.css"

const TodoForm = ({ handleChange }) => {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = {
      title: value,
      id: Date.now().toString(),
      isChecked: false,
    };
    handleChange(newValue);
    setValue("");
  };
  return (
    <div className="head-form">
      <h1>TODO-LIST</h1>
      <form  className="conteiner" onSubmit={handleSubmit}>
        <input
        className="input"
          type="text"
          onChange={handleValueChange}
          value={value}
          placeholder="Enter new todo..."
        />
        <button  className="button"  type="submit">ADD</button>
      </form>
      
    </div>
  );
};

export default TodoForm;
