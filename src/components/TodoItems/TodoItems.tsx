import React from 'react';
import './TodoItems.css';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const TodoItems = () => {

    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <ul className="todo__list">
            {todos.map((todo) => (
                <TodoItem key={todo.id}
                          todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoItems;