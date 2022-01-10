import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ReviewsList } from "./reviews-list";
import { ReviewDetails } from "./review-details";


export function Reviews() {
    return (
        <div style={{display: 'flex'}}>
            <Routes>
                <Route path={'/'} element={<ReviewsList />} />
                <Route path={'/:id-:reviewId-:vote-:reviewVote'} element={<ReviewDetails />} />
            </Routes>
        </div>
    )
}
