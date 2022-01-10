import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { API } from "../../utils/constants";
import './review-list.scss';

export function ReviewsList() {
    const [reviewsList, setReviewsList] = useState(null)
    useEffect(() => {
        fetch(`${API}/feedback`)
            .then((response) => response.json())
            .then((list) => setReviewsList(list))
    }, [])

    if (reviewsList === null) {
        return (
            <div>
                Wait to loading...
            </div>
        )
    }
    return (
        <div>
            <h1>Reviews list</h1>
            <ul>
                {reviewsList.map(({id, subject, vote, firstname, lastname}) => (
                    <li key={id}><NavLink to={`/reviews/id-${id}-vote-${vote}`}> {id}. Subject: {subject} - vote: {vote} - from: {firstname} {lastname}</NavLink></li>
                ))}
            </ul>
        </div>
    )
}