import ImgItem1 from "../../assets/img/AdobeStock_162471421.png"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({cart}) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cart.id));
  };

    return (
    <>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">{cart.item.name}</p>
          <p class="item-description">{cart.item.description}</p>
        </div>
        <div class="info2">
          <p class="price">$ {cart.item.price}</p>
          {cart && cart.quantity > 0 && (
            <div class="add-btn">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{cart.quantity} </span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
         </div>
         </div>
    </>
    )
}
