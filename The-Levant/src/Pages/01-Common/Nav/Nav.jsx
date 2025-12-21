import { useState, useEffect } from "react";
import "./Nav.css";


function Nav() {
    return (
        <nav className="nav">
            <div className="Container-nav">
                <a href="/" className="logo-container">
                    <img src="/S.png" alt="Logo" className="logo" />
                </a>
                <ul>
                    <li>Home</li>
                    <li>Countries</li>
                    <li>Hire A Guide</li>
                    <li>About Us</li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;
