import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import CheckoutCart from "../checkout/CheckoutCart";

export default function CheckoutPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <CheckoutCart />
      <Footer />
    </div>
  );
}
