import ImgIntersection from "../assets/img/Intersection_3.png"
import React, { useEffect, useState } from "react";
import CartItem from "../components/Common/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { getItems } from "../reducks/items/selectors";


export default function Cart() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);

  useEffect(() => {
    if (user.token != "") {
      dispatch(fetchCarts(user.token));
      console.log("test");
      console.log(carts);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
  }, []);


    return (
        <>
        <section class="main-visual">
        <img src={ImgIntersection} width="100%" height="100%" alt="" />
    <ul class="items">
        {(carts,
            items &&
              carts.map((cart) => (

        <li>
            <CartItem cart={cart} key={cart.item.id} />
        </li>
        ))
        )}
    </ul>
    </section>
     </>
    ) 
              }
