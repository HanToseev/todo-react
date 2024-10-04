import React from 'react';
import './Filters.css';

function Filters() {
    return (
        <div className="filters">
            <button className="filters__button">All</button>
            <button className="filters__button">Active</button>
            <button className="filters__button">Completed</button>
        </div>
    );
}

export default Filters;