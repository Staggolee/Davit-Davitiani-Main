import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.css";
import Table from "../../table/Table";

export default class Products extends Component {
  state = {
    products: null,
  };

  updateProducts = () => {
    const url = "http://localhost:5000/api/products";
    axios
      .get(url)
      .then(({ data }) => this.setState({ products: data }))
      .catch(err => console.log(err));
  };

  removeProduct = id => {
    this.setState({ loading: true });
    const url = `http://localhost:5000/api/products/${id}`;
    axios
      .delete(url)
      .then(res => {
        this.updateProducts();
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateProducts();
  }

  render() {
    return (
      <>
        <div className="add-product-btn-wrapper">
          <Link className="add-product-btn" to="/admin/products/new">
            Add New Product
          </Link>
        </div>
        <Table
          items={this.state.products}
          tHeads={["name", "price", "size", "brand", "category"]}
          remove={this.removeProduct}
          match={this.props.match}
          loading={this.state.loading}
        />
      </>
    );
  }
}
