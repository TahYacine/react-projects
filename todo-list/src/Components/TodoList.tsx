import TodoCard from './TodoCard';

type TodoListProps = {
  todos: string[];
  onDelete: (todo: number) => void;
  onEdit: (todo: number) => void;
};

export default function TodoList({ todos, onDelete, onEdit }: TodoListProps) {
  return (
      <ul className="main">
        {todos.map((todo, i) => (
          <TodoCard key={i} index = {i} onDelete = {onDelete} onEdit= {onEdit}>
            <p>{todo}</p>
          </TodoCard>
        ))}
      </ul>
  );
}
