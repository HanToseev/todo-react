import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo, AppDispatch, completeAllTodos} from '../../store/store';
import './AddTask.css';

const AddTask = () => {
    const [text, setText] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text.trim() !== '') {
            dispatch(addTodo({text}));
            setText('');
        }
    };
    const handleClearCompleted = () => dispatch(completeAllTodos());

    return (
        <div className="addTask">
            <input id="toggleAll"
                   className="addTask__toggle-all"
                   type="checkbox"
                   onClick={handleClearCompleted}
            />
            <label htmlFor="toggleAll"></label>

            <input className="addTask__input"
                   type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   onKeyDown={handleKeyDown}
                   placeholder="What needs to be done?"/>
        </div>
    );
}

export default AddTask;
