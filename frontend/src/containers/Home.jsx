import React, {useEffect, useState} from 'react'
import ImgIntersection from "../assets/img/Intersection_3.png"
import ImgItem1 from "../assets/img/AdobeStock_162471421.png"
import {useDispatch, useSelector} from "react-redux"
import {getItems} from "../reducks/items/selectors"
import {fetchItems} from "../reducks/items/operations"
import {fetchCarts} from "../reducks/carts/operations"
import Item from "../components/Common/Item"
import Footer from '../components/Common/Footer'


export default function Home() {
    const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
    }
  }, []);

    

  return (
    <>
    <section class="main-visual">
        <img src={ImgIntersection} width="100%" height="100%" alt="" />
    <ul class="items">
        {items && items.map((item) => (

        <li>
            <Item key={item.id} item={item} />
        </li>
        ))}
    </ul>
    </section>
    <Footer />
    </>
    
  )
}
