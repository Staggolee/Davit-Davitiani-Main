import React from "react";
import "./AddProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: false };

    this.nameInput = React.createRef();
    this.priceInput = React.createRef();
    this.sizeInput = React.createRef();
    this.genderInput = React.createRef();
    this.categoryInput = React.createRef();
    this.brandInput = React.createRef();
    this.descriptionInput = React.createRef();
  }

  addNewProduct = e => {
    e.preventDefault();

    const url = `http://localhost:5000/api/products`;

    const name = this.nameInput.current.value;
    const price = this.priceInput.current.value;
    const size = this.sizeInput.current.value;
    const gender = this.genderInput.current.value;
    const category = this.categoryInput.current.value;
    const brand = this.brandInput.current.value;
    const description = this.descriptionInput.current.value;

    const body = { name, price, size, gender, category, brand, description };
    axios
      .post(url, body)
      .then(({ data }) => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);

        this.nameInput.current.value = "";
        this.priceInput.current.value = "";
        this.descriptionInput.current.value = "";
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="add-product">
        <form onSubmit={this.addNewProduct}>
          <div className="button-wrapper">
            <Link to="/admin/products" className="arrow left" />
            <button className="product-btn" type="submit">
              Add Product
            </button>
          </div>
          <div className="product-img" />
          <div
            className={`product-add-loading-wrapper ${this.state.loading &&
              "product-add-loading-show"}`}
          >
            <span className="lnr lnr-checkmark-circle" />
            Product Added Successfuly!
          </div>
          <ul className="product-details-list">
            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Name</div>
                <input
                  required
                  ref={this.nameInput}
                  name="name"
                  className="product-details-input"
                />
              </div>
            </li>
            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Size</div>
                <select
                  ref={this.sizeInput}
                  className="gender-select-input"
                  name="size"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </li>

            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Brand</div>
                <select
                  ref={this.brandInput}
                  className="gender-select-input"
                  name="brand"
                >
                  <option value="Adidas">Adidas</option>
                  <option value="Nike">Nike</option>
                  <option value="Armani">Armani</option>
                  <option value="Dolce">Dolce</option>
                </select>
              </div>
            </li>

            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Price</div>
                <input
                  required
                  ref={this.priceInput}
                  name="price"
                  type="number"
                  className="product-details-input"
                />
              </div>
            </li>

            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Category</div>
                <select
                  ref={this.categoryInput}
                  className="gender-select-input"
                  name="category"
                >
                  <option value="T-shirts">T-shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Pants">Pants</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Jackets">Jackets</option>
                </select>
              </div>
            </li>

            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Gender</div>
                <select
                  ref={this.genderInput}
                  className="gender-select-input"
                  name="gender"
                >
                  <option value="women">Female</option>
                  <option value="men">Male</option>
                </select>
              </div>
            </li>

            <li className="product-details-li">
              <div className="product-input-wrapper">
                <div>Description</div>
                <textarea
                  required
                  ref={this.descriptionInput}
                  className="description-input"
                  name="description"
                />
              </div>
            </li>
          </ul>
        </form>
        <br />
      </div>
    );
  }
}
