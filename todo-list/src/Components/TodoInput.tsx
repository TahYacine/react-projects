type TodoInputProps = {
    onAdd: (todo: string) => void;
    todoValue: string;
    setTodoValue: (todoValue: string) => void;
}

export default function TodoInput({ onAdd, todoValue, setTodoValue }: TodoInputProps) {
    const handleSubmit = () => {
        if (todoValue.trim() === '') return
        onAdd(todoValue)
        setTodoValue('')
    }

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter a task..."
                required
            />
            <button onClick={handleSubmit}>Add</button>
        </header>
    )
}
