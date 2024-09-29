import React from "react";
import Filters from "../Filters/Filters";

function Footer(){
    return (
        <div>
            <span>
                0 items left!
            </span>

            <Filters/>

            <button>
                Clear completed
            </button>
        </div>
    );
}

export default Footer;