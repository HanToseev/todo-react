import React from 'react';
import './AddTask.css';

const AddTask = () => {
    return (
        <div className="addTask">
            <input id="toggleAll"
                   className="addTask__toggle-all"
                   type="checkbox"/>
            <label htmlFor="toggleAll"></label>

            <input className="addTask__input"
                   type="text"
                   placeholder="What needs to be done?"/>
        </div>
    );
}

export default AddTask;
