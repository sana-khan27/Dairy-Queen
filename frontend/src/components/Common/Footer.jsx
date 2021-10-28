import React from 'react'

function Footer({price}) {
    return (
        <div>
            <footer>
                <div class="subtotal">
                    <span class="subtotal-test">Subtotal:</span>
                    <span class="subtotal-price">$ {price}</span>
                </div>
                <a href="/shipment"><button class="btn-small">CheckOut</button></a>
            </footer>
        </div>
    )
}

export default Footer

