import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"
import { useState } from "react"
import { useEffect } from "react"

function App() {
    const [todos, setTodos] = useState<string[]>([])
    const [todoValue, setTodoValue] = useState('')

    const persistData = (newList: string[]) => {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }))
    }

    const handleAddTodo = (newTodo: string) => {
        setTodos([...todos, newTodo])
        setTodoValue('')
        persistData(todos)
    }

    const handleDeleteTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index))
        persistData(todos)
    }

    const handleEditTodo = (index: number) => {
        setTodoValue(todos[index])
        handleDeleteTodo(index)
        persistData(todos)
    }

    useEffect(() => {
        const localTodos = localStorage.getItem('todos')
        if (!localTodos) return

        try {
            const parsed = JSON.parse(localTodos)
            if (parsed && parsed.todos) {
                setTodos(parsed.todos)
                console.log(parsed.todos);
            }
        } catch (e) {
            console.error("Error while parsing the data", e)
        }
    }, [])


    return (
        <>
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} onAdd={handleAddTodo} />
            <TodoList onEdit={handleEditTodo} onDelete={handleDeleteTodo} todos={todos} />
        </>
    )
}

export default App
