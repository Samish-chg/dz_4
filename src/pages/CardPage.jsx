import React from 'react';
import {useSelector} from "react-redux";
import cartImg from "../image/cartImage.png";
import "../App.css"
const CardPage = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div>
            {cart.map((product) => (
                <div key={product._id}>
                    <img src={cartImg} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default CardPage;