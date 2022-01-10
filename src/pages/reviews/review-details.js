import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router";
import { API } from "../../utils/constants";
import { UserInfo } from "../../components/login";
import './review-details.scss';
import {Button} from "@mui/material";

export function ReviewDetails() {
    const {reviewId} = useParams();
    console.log('reviewId', reviewId)
    const currenUserInfo = useContext(UserInfo);
    const [reviewDetails, setReviewDetails] = useState(null);

    useEffect(() => {
        fetch(`${API}/feedback/${reviewId}`)
            .then((r) => r.json())
            .then((details) => setReviewDetails(details))
    }, [reviewId])

    if (reviewDetails === null) {
        return (
            <div>
                Loading review info...
            </div>
        )
    }

    const {subject, id, vote, firstname, lastname, email, message} = reviewDetails;

    return (
        <div>
            <h1>{subject}</h1>
            <h4>Id: {id}</h4>
            <h4>Vote: {vote}</h4>
            <ul>
                <li>
                    <span>Name: </span> {firstname} {lastname}
                </li>
                <li>
                    <span>Email: </span> {email}
                </li>
                <li>
                    <span>Message: </span> {message}
                </li>

            </ul>
            {currenUserInfo.isAdmin && (
                <div className={'buttons'}>
                    <Button variant="contained" type={'submit'}>Publish</Button>
                    <Button variant="contained" type={'submit'}>Don't Publish</Button>
                    <Button variant="contained" type={'submit'}>Delete</Button>
                </div>
            )}
        </div>
    )
}
