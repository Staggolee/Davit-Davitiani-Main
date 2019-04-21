import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import PurchasedProducts from "../purchasedProducts/PurchasedProducts";

export default function CheckoutPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <PurchasedProducts />
      <Footer />
    </div>
  );
}
