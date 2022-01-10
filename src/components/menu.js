import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss'
import { UserInfo } from "./login";

export function Menu() {
    const currenUserInfo = useContext(UserInfo);

    return (
        <nav className={"Menu"}>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/feedback"> Feedback </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/contact-us"> Contact</NavLink>
            {currenUserInfo.isAdmin && (
                <>
                <NavLink to="/reviews/"> Reviews list </NavLink>
                </>
            )}
        </nav>
    )
}
