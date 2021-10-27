import React from "react";
import ImgCart from "../../assets/img/cart.png";

function Header() {
    return (
        <>
        <div class="home">
        <header>
            <div class="row">
                <a href="#default" class="logo">DQ Dairy Queen</a>
            <div class="navbar-links">
                <a class="sign-in" href="/signin">Sign in</a>
                <a href="#" >
                <img src={ImgCart} /></a>
            </div>
            </div>
        </header>
        </div>
        </>
    )
}

export default Header;
