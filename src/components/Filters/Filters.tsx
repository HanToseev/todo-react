import React from 'react';
import './Filters.css';
import {AppDispatch, RootState, setFilter} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";

const Filters = () => {

    const dispatch: AppDispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.todos.filter);

    return (
        <div className="filters">
            <button className={filter === 'all' ? 'filters__button active' : 'filters__button'}
                    onClick={() => dispatch(setFilter('all'))}>
                All
            </button>
            <button className={filter === 'active' ? 'filters__button active' : 'filters__button'}
                    onClick={() => dispatch(setFilter('active'))}>
                Active
            </button>
            <button className={filter === 'completed' ? 'filters__button active' : 'filters__button'}
                    onClick={() => dispatch(setFilter('completed'))}>
                Completed
            </button>
        </div>
    );
}

export default Filters;