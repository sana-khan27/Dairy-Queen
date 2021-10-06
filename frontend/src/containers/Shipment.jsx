import React from 'react'

export default function Shipment() {
    return (
        <div>
            
      <form method="POST">
            <h4>Shipment Details</h4>
            <p>Please check your items and confirm it</p>
            <table>
            <tr>
            <td class="col1" >Sony Playstation 4 Pro White Version</td>
            <td>1</td>
            <td>$399.99</td>
            </tr>
            <tr>
            <td class="col1">Airpods Wireless Bluetooth Headphones</td>
            <td>2</td>
            <td>$124.99</td>
            </tr>
            </table>
            
            <table class="total">
            <tr>
            <td class="col1">Total Price</td>
            <td>3</td>
            <td>$649.97</td>
            </tr>
            </table>
            
        </form>
    </div>
    )
}
