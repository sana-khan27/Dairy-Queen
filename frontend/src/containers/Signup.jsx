import React from 'react'

export default function Signup() {
    return (
    <div>
        <section class="popup">
        <div class="popup-inner">
            <div class="popup-preview">
                <div class="popup-inner">
                    <img src="images/cross.png" class="close" />
                    <h4><b>DQ Dairy Queen</b></h4>
                    <h5><b>SIGN UP</b></h5>
                    <form>
                    <input type="Your Name" class="input-box" placeholder="User Name">
                    <input type="Your Email" class="input-box" placeholder="Email Address">
                    <input type="Your Password" class="input-box" placeholder="Password">
                    <br>
                    <button type="button" class="signup-btn">SIGN UP</button>
                    <p>Already a Member?<a href="#">Sign in</a></p>
                    
                    </form>
                    
                    
            </div>
        </div>
    </div>
    </section>
    </div>
    )
}
