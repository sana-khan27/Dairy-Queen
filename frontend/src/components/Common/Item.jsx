import React from 'react'

export default function Item({item}) {
    return (
        <div>
            <img src={item.image} class="item-image" alt="" />
            <div class="info">
                <div class="name">{item.name}</div>
                <div class="info-bottom">
                    <div class="price">$ {item.price}</div>
                    <div class="add">Add +</div>
                </div>
            </div>
        </div>
    )
}
