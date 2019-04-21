import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutCartItemList from "./CheckoutCartItemList";
import { updateCart, setCurrentUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./CheckoutCart.css";
import axios from "axios";

class CheckoutCart extends Component {
  state = { loading: false };

  processCheckout = (charge, balance) => {
    if (charge > balance || charge === 0) return;

    const { id } = this.props.user;
    const url = `http://localhost:5000/api/customers/${id}/purchased`;

    axios
      .post(url, { charge })
      .then(({ data }) => {
        this.props.updateCart([]);
        this.props.setCurrentUser(data);
        localStorage.setItem("_auth_user_", JSON.stringify(data));
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 8000);
      })
      .catch(err => console.log(err));
  };

  removeItemFromCart = prodId => {
    const id = this.props.user.id;
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
    const { cart } = this.props.user;
    const totalCost =
      cart &&
      cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const { balance } = this.props.user;
    const difference = balance - totalCost;

    return (
      <div className="checkout">
        <div className="checkout__cart">
          <div className="checkout__cart--head">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>
          <CheckoutCartItemList
            items={this.props.user.cart}
            remove={this.removeItemFromCart}
          />
        </div>
        <div className="checkout__total--wrapper">
          <div className="checkout__total--title">Cart Total</div>
          <div className="checkout__shipping">
            <span className="shipping-cost">Shipping:</span>
            <span>Free Shipping!</span>
          </div>
          <div className="checkout--total">
            <span>Total:</span>
            <span>${totalCost || 0}</span>
          </div>
          <div className="checkout--balance--wrapper">
            <span>Your Balance:</span>
            <span>${balance || 0}</span>
          </div>
          <div
            className={`checkout-loading-wrapper ${this.state.loading &&
              "checkout-loading-show"}`}
          >
            <span className="lnr lnr-checkmark-circle">
              Checkout Successful
            </span>
            <Link className="purchase-hist-link" to="/purchased">
              View Purchase History
            </Link>
          </div>
          <button
            onClick={() => this.processCheckout(totalCost, balance)}
            className={`checkout-cart-btn ${
              difference < 0 ||
              (this.props.user.cart && this.props.user.cart.length === 0)
                ? "disabled"
                : ""
            }`}
            title={`${difference < 0 ? "Insufficient Funds!" : ""}`}
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { updateCart, setCurrentUser }
)(CheckoutCart);
