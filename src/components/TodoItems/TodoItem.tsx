import React from 'react';
import './TodoItem.css';
import closeIco from '../../icons/cross.svg';

const TodoItem = () => {
    return (
        <li className="task__item">
            <input className="task__status" type="checkbox"/>
            <label className="task__text">
                задача
                <button className="task__delete">
                    <img className="task__delete-ico" src={closeIco} alt="Delete"/>
                </button>
            </label>
        </li>
    );
}

export default TodoItem;