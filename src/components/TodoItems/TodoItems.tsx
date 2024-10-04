import React from 'react';
import './TodoItems.css';
import TodoItem from "./TodoItem";

const TodoItems = () => {
    return (
        <ul className="todo__list">
            <TodoItem/>
        </ul>
    );
}

export default TodoItems;