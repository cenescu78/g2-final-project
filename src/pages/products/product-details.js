import React from 'react';
import { useParams } from "react-router";

export function ProductDetails() {
    const params = useParams();
    console.log('params', params)
    // useEffect(() => {
    // fetch(`http://localhost:3000/products${params.productId}`)
    // }, [])
    return (
        <div>
            <h1> this is the {params.productName} page</h1>
        </div>
    )
}
