import React from 'react'
import ImgIntersection from "../assets/img/Intersection_3.png"
import ImgItem1 from "../assets/img/AdobeStock_162471421.png"

export default function Cart() {
    return (
        <div>
           <section class="main-visual">
        <img src={ImgIntersection} width="1350px" height="500px" alt="" />
    </section>

    

    <ul class="items">
        <li>
            <img src={ImgItem1} class="item-image" alt="" />
            <div class="info">
                <div class="name">Crazy Freak Shake</div>
                <div class="info-bottom">
                    <div class="price">$16</div>
                    <div class="add">Add +</div>
                </div>
            </div>
        </li>
        <li>
            <img src={ImgItem1} class="item-image" alt="" />
            <div class="info">
                <div class="name">Crazy Freak Shake</div>
                <div class="info-bottom">
                    <div class="price">$16</div>
                    <div class="add">Add +</div>
                </div>
            </div>
        </li>
        <li>
            <img src="images\AdobeStock_162471421.png" class="item-image" alt="" />
            <div class="info">
                <div class="name">Crazy Freak Shake</div>
                <div class="info-bottom">
                    <div class="price">$16</div>
                    <div class="number">
                        <span class="minus">－</span>
                        <span class="count">1</span>
                        <span class="plus">+</span>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <img src={ImgItem1} class="item-image" alt="" />
            <div class="info">
                <div class="name">Crazy Freak Shake</div>
                <div class="info-bottom">
                    <div class="price">$16</div>
                    <div class="add">Add +</div>
                </div>
            </div>
        </li>
    </ul>
    


 
        </div>
    )
}
