import React from 'react';
import json from '../data/data.json'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/action.js";
import cartImg from "../image/cartImage.png"
import "../App.css"
const MainPage = () => {
    const products = json
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleCartAdd = (products) =>{
        const inCart = cart.some(item=>item._id===products._id)
        if (!inCart) {
            dispatch(addToCart(products))

        }else (alert("Продукт уже добавлен"))

    }

    return (
        <div>
        <div>
            {products.map((product)=>(
                <div key={product._id}>
                    <img src={cartImg} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={ ()=> handleCartAdd(product)} >Добавить в корзину</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default MainPage;