import React, {useEffect, useState} from "react";
import ImgCart from "../../assets/img/cart.png";
import { signOut } from "../../reducks/user/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function Header() {
    const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);
  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };
  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);
    return (
        <>
        <div class="home">
        <header>
            <div class="row">
                <a href="#default" class="logo">DQ Dairy Queen</a>
            <div class="navbar-links">
                {key ? (

                <span class="sign-in" onClick={signOutButton}>Logout</span>
                ) : (
                    <a class="sign-in" href="/signin">Sign in</a>
                    )
                }
                {checkUser && (
                <a href="/cart" ><img src={ImgCart} /></a>
                )}
            </div>
            </div>
        </header>
        </div>
        </>
    )
}

export default Header;
