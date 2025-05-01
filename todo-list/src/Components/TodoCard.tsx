import React from 'react'

interface TodoCardProps {
    children?: React.ReactNode;
}

export default function TodoCard({ children }: TodoCardProps) {
    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </li>
    )
}
