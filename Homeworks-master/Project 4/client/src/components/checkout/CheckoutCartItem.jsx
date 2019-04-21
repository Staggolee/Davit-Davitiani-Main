import React from "react";
import { Link } from "react-router-dom";
import { updateCart } from "../../actions/authActions";
import { connect } from "react-redux";
import axios from "axios";

class CheckoutCartItem extends React.Component {
  increaseQuantity = () => {
    const { id } = this.props.user;
    const url = `http://localhost:5000/api/customers/${id}/cart`;

    // Add product in user cart
    axios
      .post(url, { id: this.props.item.id })
      .then(() => {
        // Get updated cart
        axios
          .get(url)
          .then(({ data }) => this.props.updateCart(data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  decreaseQuantity = () => {
    const { id } = this.props.user;
    const prodId = this.props.item.id;
    const url = `http://localhost:5000/api/customers/${id}/cart/${prodId}`;

    axios
      .patch(url)
      .then(() => {
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
      <li className="checkout__cart--item">
        <span
          onClick={() => this.props.remove(this.props.item.id)}
          className="checkout__cart--img lnr lnr-cross"
        >
          <img src={this.props.item.image} alt="Product" />
        </span>
        <Link
          to={`/${this.props.item.gender}/${this.props.item.id}`}
          className="checkout__cart--title"
        >
          {this.props.item.name}
        </Link>

        <div className="checkout__cart--price">${this.props.item.price}</div>
        <div className="checkout__cart--quantity">
          <button className="quantity-btn" onClick={this.increaseQuantity}>
            <i className="fas fa-plus" />
          </button>
          <span className="checkout__cart--amount">
            {this.props.item.quantity}
          </span>
          <button className="quantity-btn" onClick={this.decreaseQuantity}>
            <i className="fas fa-minus" />
          </button>
        </div>
        <div className="checkout__cart--price-total">
          ${this.props.item.price * this.props.item.quantity}
        </div>
      </li>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(
  mapStateToProps,
  { updateCart }
)(CheckoutCartItem);
