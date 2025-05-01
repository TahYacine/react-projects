import React from 'react'
import TodoCard from "./TodoCard" 

export default function TodoList() {
    let todos = [
        'Gym',
        'Vegetables',
        'Cpp'
    ]

  return (
    <div>
        <ul className = "main">
            {todos.map((todo, todoIndex) => (
                    <TodoCard key = {todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                    ))}
        </ul>
    </div>
  )
}
