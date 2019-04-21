import React from "react";
import { Link } from "react-router-dom";

import "./CartItem.css";

export default function CartItem({ item, removeItem }) {
  return (
    <li className="cart__item">
      <span onClick={removeItem} className="cart__item--img lnr lnr-cross">
        <img src={item.image} alt="Product" />
      </span>
      <div className="cart__item--details">
        <Link
          replace
          to={`/${item.gender}/${item.id}`}
          className="cart__item--title"
        >
          {item.name}
        </Link>
        <div className="cart__item--total">
          {item.quantity} x ${item.price}
        </div>
      </div>
    </li>
  );
}
