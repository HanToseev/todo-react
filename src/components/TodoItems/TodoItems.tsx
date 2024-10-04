import React from 'react';
import './TodoItems.css';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const TodoItems = () => {

    const todos = useSelector((state: RootState) => state.todos.todos);
    const filter = useSelector((state: RootState) => state.todos.filter);

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return todo.isCompleted;
        if (filter === 'active') return !todo.isCompleted;
        return true;
    });


    return (
        <ul className="todo__list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id}
                          todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoItems;