import React from "react";
import Filters from "../Filters/Filters";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <span className='footer__count'>
                count items left!
            </span>

            <Filters/>

            <button className="footer__clear">
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;