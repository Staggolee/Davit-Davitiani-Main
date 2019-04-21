import { Link } from "react-router-dom";
import React from "react";

const PurchasedItem = ({ item }) => (
  <li className="checkout__cart--item">
    <span className="checkout__cart--img lnr lnr-cross">
      <img src={item.image} alt="" />
    </span>
    <Link to={`/${item.gender}/${item.id}`} className="checkout__cart--title">
      {item.name}
    </Link>

    <div className="checkout__cart--price">${item.price}</div>
    <div className="checkout__cart--quantity">
      <span className="checkout__cart--amount">{item.quantity}</span>
    </div>
    <div className="checkout__cart--price-total">
      ${item.price * item.quantity}
    </div>
  </li>
);

export default PurchasedItem;
