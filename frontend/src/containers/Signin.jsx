import React from 'react'

export default function signin() {
    return (
    <div>
        <section class="popup">
        <div class="popup-inner">
            <div class="popup-preview">
                <div class="popup-inner">
                    <img src="images/cross.png" class="close" />
                    <h4><b>DQ Dairy Queen</b></h4>
                    <h5><b>SIGN IN</b></h5>
                    <form>
                    <input type="Your Email" class="input-box" placeholder="Email Address">
                    <input type="Your Password" class="input-box" placeholder="Password">
                    <br>
                    <button type="button" class="joinus-btn">JOIN US</button>
                    <p>Not a Member?<a href="#">Join Us</a></p>
                    
                    </form>
                    
                    
                </div>
            </div>
        </div>
    </section>

    </div>
    )
}
