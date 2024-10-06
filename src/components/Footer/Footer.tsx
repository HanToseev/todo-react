import Filters from "../Filters/Filters";
import './Footer.css';
import {AppDispatch, clearCompletedTodos, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";

const Footer = () => {
    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const tasksLeft = todos.filter((todo) => !todo.isCompleted).length;

    const handleClearCompleted = () => dispatch(clearCompletedTodos());

    if (todos.length === 0) return null;

    return (
        <footer className="footer">
            <span className='footer__count'>
                {tasksLeft} count items left!
            </span>

            <Filters/>

            <button className="footer__clear"
                    onClick={handleClearCompleted}>
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;