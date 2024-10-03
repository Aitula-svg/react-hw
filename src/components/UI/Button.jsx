import React from "react";
import "./Button.css";

const Button = ({ children, onClick, type="button", ...props }) => {
  return (
    <button  onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;

// className="button-movie" 
