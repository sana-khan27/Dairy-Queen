import React from 'react'
import ImgCross from "../assets/img/cross.png"
import Home from "./Home";
import { signIn } from "../reducks/user/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { push } from "connected-react-router";


    function Signin() {
        const dispatch = useDispatch();
      
        const closeButton = () => {
          dispatch(push("/"));
        };
      
        const [email, setEmail] = useState(""),
          [password, setPassword] = useState("");
      
        const inputEmailAddress = (event) => {
          setEmail(event.target.value);
        };
      
        const inputPassword = (event) => {
          setPassword(event.target.value);
        };
      
        const JoinUsButton = (event) => {
          event.preventDefault();
          dispatch(signIn(email, password));
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
                    <h5><b>SIGN IN</b></h5>
                    <form action="/">
                    <input type="text" class="input-box" placeholder="Email Address" onChange={inputEmailAddress}/>
                    <input type="text" class="input-box" placeholder="Password" onChange={inputPassword} />
                    <br/>
                    <input type="button" class="joinus-btn" onClick={JoinUsButton} value="JOIN US" />
                    <p>Not a Member?<a href="/signup">Join Us</a></p>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    </section>

    </>
    )
}

export default Signin;
