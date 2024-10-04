import React from "react";
import Filters from "../Filters/Filters";
import './Footer.css';
import {AppDispatch, clearCompletedTodos} from "../../store/store";
import {useDispatch} from "react-redux";


function Footer() {

    const dispatch: AppDispatch = useDispatch();
    const handleClearCompleted = () => {
        dispatch(clearCompletedTodos());
    };
    return (
        <footer className="footer">
            <span className='footer__count'>
                count items left!
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