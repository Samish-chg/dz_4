import React from 'react';
import {useSelector} from "react-redux";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    const cart = useSelector(state =>  state.cart)

    return (
        <header >
            <div >cart:{cart.length}</div>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"/cart"}>cart</NavLink>
            <Outlet/>
        </header>
    );
};

export default Layout;