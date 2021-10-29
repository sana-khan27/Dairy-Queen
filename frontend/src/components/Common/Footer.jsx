import React, {useState, useEffect} from 'react'
const key = localStorage.getItem("LOGIN_USER_KEY");

function Footer({price}) {
    return (
        <div>
            {key != null && (

            <footer>
                <div class="subtotal">
                    <span class="subtotal-test">Subtotal:</span>
                    <span class="subtotal-price">$ {price}</span>
                </div>
                <a href="/shipment"><button class="btn-small">CheckOut</button></a>
            </footer> 
            )}
        </div>
    )
}

export default Footer

