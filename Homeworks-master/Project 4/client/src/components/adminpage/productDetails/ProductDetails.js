import React from "react";
import "./ProductDet.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.priceInput = React.createRef();
    this.sizeInput = React.createRef();
    this.categoryInput = React.createRef();
    this.brandInput = React.createRef();

    this.state = {
      product: null,
      loading: false,
    };
  }

  updateProduct = () => {
    const { prodId } = this.props.match.params;
    const url = `http://localhost:5000/api/products/${prodId}`;

    const name = this.nameInput.current.value;
    const price = this.priceInput.current.value;
    const size = this.sizeInput.current.value;
    const category = this.categoryInput.current.value;
    const brand = this.brandInput.current.value;

    axios
      .put(url, { name, price, size, category, brand })
      .then(({ data }) => {
        this.setState({ product: data, loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const { prodId } = this.props.match.params;
    const url = `http://localhost:5000/api/products/${prodId}`;
    axios
      .get(url)
      .then(({ data }) =>
        this.setState({
          product: data,
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="res-product">
        <div className="product-btn-wrapper">
          <Link to="/admin/products" className="arrow left" />
          <button
            onClick={this.updateProduct}
            className="product-btn"
            type="button"
          >
            Update Product
          </button>
        </div>
        <div
          className={`product-add-loading-wrapper ${this.state.loading &&
            "product-add-loading-show"}`}
        >
          <span className="lnr lnr-checkmark-circle" />
          Product Updated Successfuly!
        </div>
        <div className="product-img-wrapper">
          <img
            src={this.state.product && this.state.product.image}
            alt="Product"
            className="product-img"
          />
        </div>
        <ul className="product-details-list">
          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Name</div>
              <input
                ref={this.nameInput}
                name="name"
                className="product-details-input"
                defaultValue={this.state.product && this.state.product.name}
              />
            </div>
          </li>
          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Size</div>
              <input
                ref={this.sizeInput}
                name="size"
                className="product-details-input"
                defaultValue={this.state.product && this.state.product.size}
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Brand</div>
              <input
                ref={this.brandInput}
                name="brand"
                className="product-details-input"
                defaultValue={this.state.product && this.state.product.brand}
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Price</div>
              <input
                ref={this.priceInput}
                name="price"
                type="number"
                className="product-details-input"
                defaultValue={this.state.product && this.state.product.price}
              />
            </div>
          </li>

          <li className="product-details-li">
            <div className="product-input-wrapper">
              <div>Category</div>
              <input
                ref={this.categoryInput}
                name="category"
                className="product-details-input"
                defaultValue={this.state.product && this.state.product.category}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
