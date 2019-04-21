import React from "react";
import { Link } from "react-router-dom";
import "./CartDetails.css";

export default function CartDetails({ total, notEmpty }) {
  return (
    <div className="cart__details">
      {total ? <div className="cart__total">Total: ${total}</div> : null}
      <div className="cart__btn--wrapper">
        {notEmpty && (
          <Link to="/checkout" className="cart__btn">
            CHECK OUT
          </Link>
        )}
      </div>
    </div>
  );
}
