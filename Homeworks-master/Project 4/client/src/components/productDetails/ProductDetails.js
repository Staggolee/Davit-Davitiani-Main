import "./ProductDetails.css";
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateCart } from "../../actions/authActions";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  fetchProduct = () => {
    const id = this.props.match.url.split("/").slice(-1)[0];
    const url = `http://localhost:5000/api/products/${id}`;
    axios
      .get(url)
      .then(({ data }) => this.setState({ product: data }))
      .catch(err => console.log(err));
  };

  addProductToCart = () => {
    const { id } = this.props.user;
    const url = `http://localhost:5000/api/customers/${id}/cart`;

    // Add product in user cart
    axios
      .post(url, { id: this.state.product.id })
      .then(() => {
        // Get updated cart
        axios
          .get(url)
          .then(({ data }) => this.props.updateCart(data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <div>
        {this.state.product ? (
          <div className="product-details-wrapper">
            <div className="product-image-wrapper">
              <img
                className="product-image"
                src={this.state.product.image}
                alt="Product"
              />
            </div>

            <div className="product-details">
              <div className="product-name">{this.state.product.name}</div>
              <div className="product-brand">{this.state.product.brand}</div>
              <div className="product-size-wrapper">
                <span className="product-size">{this.state.product.size}</span>
              </div>
              <div className="product-description-wrapper">
                <p className="product-description">
                  {this.state.product.description}
                </p>
              </div>
              <div className="product-price">${this.state.product.price}</div>
              <button
                className="add-to-cart-btn"
                onClick={this.addProductToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <h1 className="no-product">Product Not Found!</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(
  mapStateToProps,
  { updateCart }
)(ProductDetails);
