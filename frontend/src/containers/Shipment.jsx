import React from 'react'

export default function Shipment() {
    return (
        <>
            
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
            
            <div class="input-group">
               <div class="input-box">
               <h6>Full Name</h6>
                   <input type="text" placeholder="Enter Recepient's Name" required class="name"/>
                </div>
                   <br/>
    
                
                <div class="input-box">
                <h6>Phone Number</h6>
                   <input type="text" placeholder="Enter Phone Number" required class="number"/>
                   </div>
                <br/>
                
                <div class="input-box">
                <h6>Street address or P.O.Box</h6>
                   <input type="text" placeholder="Enter Street address or P.O.Box" required class="number"/>
                   </div>
                   <br/>
                
                <div class="input-box">
                <h6>PIN Code</h6>
                   <input type="text" placeholder="Enter PIN Code" required class="number"/>
                </div>
                <br/>
                
                <div class="input-box">
                <h6>Apt, suite, unit, building, floor, etc.</h6>
                    <input type="text" placeholder="Enter Apt, suite, unit, building,etc." required class="number"/>
                </div>
                <br/>
                
                <div class="input-box">
                <h6>City</h6>
                    <input type="text" placeholder="Enter City" required class="number"/>
                </div>
                <br/>
               
                <div class="input-box">
                 <h6>State</h6>
                    <input type="text" placeholder="Enter State" required class="number"/>
                    </div>
                    <br/>
                  <div class="side"><button class="link-button">SUBMIT</button></div> 
            </div>       
        </form>
    </>
    )
}
