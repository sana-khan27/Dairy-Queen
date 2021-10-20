import Router from './Router'
import "./assets/style.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./reducks/user/selectors";
import { fetchUserFromLocalStorage } from "./reducks/user/operations";
import { getSubtotal } from "./reducks/carts/selectors";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const subtotal = getSubtotal(selector);
  return (
    <>
    <Header/>
    <Router/>
    <Footer price={subtotal} />
    </>
  );
}

export default App;
