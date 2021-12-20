import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export function ProductList() {


    const [productList, setProductList] = useState([
        {
            id: 22,
            name: 'cartofi'
        },
        {
            id: 23,
            name: 'pepeni'
        }
    ])
    // useEffect(() => {
    //     fetch(`http://localhost:3000/products`)
    //         .then((response) => response.json())
    //         .then((list) => setProductList(list))
    // }, [])
    return (
        <div>
            <h1>Product list</h1>
            <ul>
                {productList.map(({id, name}) => (
                    <li key={id}><NavLink to={`/produse/${name}-id-${id}`}> {name} </NavLink></li>
                ))}
            </ul>
        </div>
    )
}
