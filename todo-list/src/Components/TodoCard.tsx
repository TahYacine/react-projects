import React from 'react'

type TodoCardProps = {
    children?: React.ReactNode;
    index: number;
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
}

export default function TodoCard({ children, index,  onDelete, onEdit}: TodoCardProps) {
    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick = {() => onEdit(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick = {() => onDelete(index)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </li>
    )
}
