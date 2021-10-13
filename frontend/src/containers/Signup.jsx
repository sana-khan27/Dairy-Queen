import React from "react";
import Home from "./Home";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signUp } from "../reducks/user/operations";
import ImgCross from "../assets/img/cross.png";


export default function Signup() {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = (e) => {
    e.preventDefault();
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  
    return (
    <>
        <section class="popup">
        <div class="popup-inner">
            <div class="popup-preview">
                <div class="popup-inner">
                    <img src={ImgCross} class="close" />
                    <h4><b>DQ Dairy Queen</b></h4>
                    <h5><b>SIGN UP</b></h5>
                    <form action="/">
                    <input type="text" name="username" id="username" class="input-box" placeholder="User Name" onChange={inputUserName} />
                    <input type="text" name="email" id="emaul" class="input-box" placeholder="Email Address" onChange={inputEmail} />
                    <input type="text" name="password" id="password" class="input-box" placeholder="Password" onChange={inputPassword} />
                    <br />
                    <input type="button" class="signup-btn" onSubmit={signUpButton} value="SIGN UP" />
                    
                    </form>
                    <p>Already a Member?<a href="/signin">Sign in</a></p>
                    </div>
                    </div>
                    </div>
                    </section>

      
    </>
  );
}
