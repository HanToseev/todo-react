import {useState} from 'react';
import './TodoItem.css';
import closeIco from '../../icons/cross.svg';
import {Todo} from '../../types/type';
import {AppDispatch, deleteTodo, toggleTodo, editTodo} from "../../store/store";
import {useDispatch} from "react-redux";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [editText, setEditText] = useState(todo.text);
    const [editing, setEditing] = useState(false);
    const handleToggle = (id: string) => dispatch(toggleTodo({id}));
    const handleDelete = (id: string) => dispatch(deleteTodo({id}));
    const handleSaveEdit = () => {
        if (editText.trim()) {
            dispatch(editTodo({
                id: todo.id,
                text: editText,
            }));
            setEditing(false);
        }
    };

    return (
        <li className="task__item">
            <input className="task__status"
                   checked={todo.isCompleted}
                   onChange={() => handleToggle(todo.id)}
                   type="checkbox"
            />

            {editing ? (
                <input className="task__text"
                       value={editText}
                       onChange={(e) => setEditText(e.target.value)}
                       onBlur={handleSaveEdit}
                       onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                />
            ) : (
                <p className="task__text"
                   onDoubleClick={() => setEditing(true)}>
                    {todo.text}

                    <button className="task__delete"
                            onClick={() => handleDelete(todo.id)}>
                        <img className="task__delete-ico"
                             src={closeIco}
                             alt="Delete"/>
                    </button>
                </p>
            )}

        </li>
    );
}

export default TodoItem;