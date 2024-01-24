import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;