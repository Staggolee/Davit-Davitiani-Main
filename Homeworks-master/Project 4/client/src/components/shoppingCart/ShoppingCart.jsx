import React from "react";
import "./ShoppingCart.css";
import CartItemList from "./CartItemList";
import CartDetails from "./CartDetails";
import CartHeader from "./CartHeader";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import { toggleCart } from "../../actions/cartActions";

function ShoppingCart({ toggleCart, visible, user, isLogged }) {
  const totalPrice = !isEmpty(user.cart)
    ? user.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  return (
    <>
      <div
        onClick={toggleCart}
        className={`cart--wrapper ${visible && "cart--visible"}`}
      />
      <div className="cart">
        <CartHeader toggleCart={toggleCart} />
        <CartItemList
          removeItem={id => alert(`Remove Item was clicked for ${id}`)}
          isLogged={isLogged}
          userId={user.id}
          items={user.cart}
        />
        <CartDetails notEmpty={!isEmpty(user.cart)} total={totalPrice} />
      </div>
    </>
  );
}

const mapStateToProps = ({ auth, cart }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
  visible: cart.visible,
});

export default connect(
  mapStateToProps,
  { toggleCart }
)(ShoppingCart);
