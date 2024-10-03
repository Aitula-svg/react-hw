import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  console.log("todos: ", todos);

  const handleChange = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteBtn = (todoId) => {
    console.log(todoId);
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  return (
    <div className="Body-Todo">
      <TodoForm handleChange={handleChange} />
      <TodoList todos={todos} setTodos={setTodos} deleteBtn={deleteBtn} />
    </div>
  );
};

export default Todo;
