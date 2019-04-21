import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import ProductCategory from "../productCategory/ProductCategory";

export default function MenPage({ match }) {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <ProductCategory gender="men" match={match} />
      <Footer />
    </div>
  );
}
