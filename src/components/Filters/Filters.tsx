import './Filters.css';
import {AppDispatch, RootState, setFilter} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";

const Filters = () => {

    const dispatch: AppDispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.todos.filter);
    const handleChangeFilter = (filter: 'all' | 'active' | 'completed') => dispatch(setFilter(filter));
    const getButtonClass = (currentFilter: string) => filter === currentFilter ? 'filters__button active' : 'filters__button';

    return (
        <div className="filters">
            <button className={getButtonClass('all')}
                    onClick={() => handleChangeFilter('all')}>
                All
            </button>
            <button className={getButtonClass('active')}
                    onClick={() => handleChangeFilter('active')}>
                Active
            </button>
            <button className={getButtonClass('completed')}
                    onClick={() => handleChangeFilter('completed')}>
                Completed
            </button>
        </div>
    );
}

export default Filters;