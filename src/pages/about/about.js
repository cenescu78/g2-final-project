import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./about-us";
import { AboutCompany } from "./about-company";
import under from "../../images/Under_construction.gif";

export function About() {

    return (
        <div>
            <div>
                <img className={'underConstruction'} src={under} alt="UC"/>
                <p>UNDER CONSTRUCTION! </p>
            </div>
            <Routes>
                <Route path={'/us'} element={<AboutUs />} />
                <Route path={'/company'} element={<AboutCompany />} />
            </Routes>
        </div>
    )
}
