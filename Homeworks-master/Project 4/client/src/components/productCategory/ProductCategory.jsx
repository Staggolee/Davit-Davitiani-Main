import React, { Component } from "react";
import axios from "axios";
import SortBy from "../sortBy/SortBy";
import "./ProductCategory.css";
import Filters from "../filters/Filters";
import ProductCardList from "../productCardList/ProductCardList";

export default class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      filters: {
        category: "All categories",
        size: "Any size",
        brands: [],
        price: { min: "", max: "" },
      },
      shouldProductsUpdate: true,
    };
  }

  updateProducts = () => {
    const url = `http://localhost:5000/api/products/?filters=${JSON.stringify(this.state.filters)}`;

    axios
      .get(url)
      .then(({ data }) =>
        this.setState({ products: data, shouldProductsUpdate: false })
      )
      .catch(err => console.log(err));
  };

  onRadioInput = e => {
    const { name, value } = e.target;
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        [name]: value,
      },
      shouldProductsUpdate: true,
    }));
  };

  // For filtering with brands
  onCheckboxInput = e => {
    const { value, checked } = e.target;
    this.setState(({ filters }) => {
      // If user checked brand, push it into array
      if (checked) {
        const { brands } = filters;

        return {
          filters: {
            ...filters,
            brands: [...brands, value],
          },
          shouldProductsUpdate: true,
        };
      }

      // Else means user unchecked brand and remove it from array
      const { brands } = filters;
      const filteredBrands = brands.filter(brand => brand !== value);
      return {
        filters: {
          ...filters,
          brands: filteredBrands,
        },
        shouldProductsUpdate: true,
      };
    });
  };

  onPriceInput = e => {
    const { name, value } = e.target;
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        price: {
          ...filters.price,
          [name]: value,
        },
      },
      shouldProductsUpdate: true,
    }));
  };

  render() {
    if (this.state.shouldProductsUpdate) this.updateProducts();
    return (
      <>
        <SortBy gender={this.props.gender.toUpperCase()} />
        <div className="product-category">
          <Filters
            filters={this.state.filters}
            onRadioInput={this.onRadioInput}
            onCheckboxInput={this.onCheckboxInput}
            onPriceInput={this.onPriceInput}
          />
          <ProductCardList
            match={this.props.match}
            products={this.state.products}
            gender={this.props.gender}
          />
        </div>
      </>
    );
  }
}
