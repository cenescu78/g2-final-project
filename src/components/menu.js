import React from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss'

export function Menu() {

    return (
        <nav className={"Menu"}>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/contact-us"> Contact</NavLink>
            <NavLink to="/produse"> Products </NavLink>
        </nav>
    )
}
