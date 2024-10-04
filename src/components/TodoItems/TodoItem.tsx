import React from 'react';
import './TodoItem.css';
import closeIco from '../../icons/cross.svg';
import {Todo} from '../../store/type';
import {AppDispatch, deleteTodo, toggleTodo} from "../../store/store";
import {useDispatch} from "react-redux";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {
    const dispatch: AppDispatch = useDispatch();
    const handleToggle = (id: string) => {
        dispatch(toggleTodo({id}));
    };
    const handleDelete = (id: string) => {
        dispatch(deleteTodo({id}));
    };

    return (
        <li className="task__item">
            <input className="task__status"
                   checked={todo.isCompleted}
                   onChange={() => handleToggle(todo.id)}
                   type="checkbox"
            />

            <p className="task__text">
                {todo.text}

                <button className="task__delete"
                        onClick={() => handleDelete(todo.id)}>
                    <img className="task__delete-ico" src={closeIco} alt="Delete"/>
                </button>
            </p>
        </li>
    );
}

export default TodoItem;