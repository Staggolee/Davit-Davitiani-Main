import React from "react";
import "./CartHeader.css";

export default function CartHeader({toggleCart}) {
  return (
    <div className="cart__header">
      <span className="cart__title">YOUR CART</span>
      <span className="cart__close" onClick={toggleCart}>
        <span className="lnr lnr-cross" />
      </span>
    </div>
  );
}
