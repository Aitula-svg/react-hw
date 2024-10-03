import React from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css"

const TodoList = ({todos, deleteBtn}) => {
  
  return (
    <ul className='cart'>
        {todos.map((item) => (
            <TodoItem key={item.id} {...item} deleteBtn={deleteBtn} />
        ))}
      
    </ul>
  )
}

export default TodoList
