import "./IncreDecre.css";
import React, { useState } from "react";

const IncreDecre = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count === 0) {
      alert("Ниже номера нет)");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="plus-minus">
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default IncreDecre;
