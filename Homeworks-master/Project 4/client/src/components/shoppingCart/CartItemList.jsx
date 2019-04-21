import React, { Component } from "react";
import axios from "axios";
import { updateCart } from "../../actions/authActions";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import "./CartItemList.css";
import isEmpty from "../../validation/is-empty";

class CartItemList extends Component {
  removeItemFromCart = prodId => {
    const id = this.props.userId;
    const url = `http://localhost:5000/api/customers/${id}/cart/${prodId}`;

    axios
      .delete(url)
      .then(({ data }) => {
        const url = `http://localhost:5000/api/customers/${id}/cart`;

        axios
          .get(url)
          .then(({ data }) => this.props.updateCart(data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <ul className="cart__list">
        {this.props.isLogged ? (
          !isEmpty(this.props.items) ? (
            this.props.items.map((item, ind) => (
              <CartItem
                removeItem={() => this.removeItemFromCart(item.id)}
                key={`${item.id}:${ind}`}
                item={item}
              />
            ))
          ) : (
            <h1 className="cart-empty-msg">Cart is empty!</h1>
          )
        ) : (
          <h1 className="cart-empty-msg">Please, Log In!</h1>
        )}
      </ul>
    );
  }
}

export default connect(
  null,
  { updateCart }
)(CartItemList);
