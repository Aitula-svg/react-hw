import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ title, id, deleteBtn }) => {
  const [completed, setCompleted] = useState(false);

  const Completed = () => {
    setCompleted(!completed);
  };
  return (
    <li className="cart-child">
      <input type="checkbox" onChange={Completed} checked={completed} />

      <p
        style={{
          textDecoration: completed ? "line-through solid red" : "none",
        }}
      >
        {title}
      </p>
      <button onClick={() => deleteBtn(id)}>DELETE</button>
    </li>
  );
};

export default TodoItem;
