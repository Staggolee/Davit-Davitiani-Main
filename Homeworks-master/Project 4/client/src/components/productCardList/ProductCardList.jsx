import React from "react";
import "./ProductCardList.css";
import ProductCard from "../productCard/ProductCard";

export default function ProductCardList({ gender, products, match }) {
  const filteredProducts =
    products && products.filter(prod => prod.gender === gender);
  return (
    <div className="product-list">
      {filteredProducts ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((prod, index) => (
            <ProductCard
              key={index}
              prod={prod}
              index={index}
              matchedUrl={match.url}
            />
          ))
        ) : (
          <h1 className="no-product">No Product!</h1>
        )
      ) : (
        <h1 className="no-product">Loading Products...</h1>
      )}
    </div>
  );
}
