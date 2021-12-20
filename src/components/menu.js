import React from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss'

export function Menu() {

    return (
        <nav className={"Menu"}>
            <NavLink to="/"> go to home</NavLink>
            <NavLink to="/contact-us"> go to contact</NavLink>
        </nav>
    )
}
