import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import store from "./store";
import { setCurrentUser, updateCart } from "./actions/authActions";
import axios from "axios";

import "./App.css";
import AdminPage from "./components/adminpage/AdminPage";
import HomePage from "./components/pages/HomePage";
import MenPage from "./components/pages/MenPage";
import WomenPage from "./components/pages/WomenPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import AboutPage from "./components/pages/AboutPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import PurchasedPage from "./components/pages/PurchasedPage";

if (localStorage._auth_user_) {
  const user = JSON.parse(localStorage._auth_user_);
  store.dispatch(setCurrentUser(user));

  const { id } = user;
  const url = `http://localhost:5000/api/customers/${id}/cart`;

  axios
    .get(url)
    .then(({ data }) => {
      store.dispatch(updateCart(data));
    })
    .catch(err => console.log(err));
}

const App = ({ isLogged, user }) => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/men" component={MenPage} />
          <Route exact path="/women" component={WomenPage} />
          <Route exact path="/men/:prodId" component={ProductDetailPage} />
          <Route exact path="/women/:prodId" component={ProductDetailPage} />
          <Route
            exact
            path="/login"
            render={() => (isLogged ? <Redirect to="/" /> : <LoginPage />)}
          />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/purchased" component={PurchasedPage} />
          <Route
            path="/admin"
            render={({ match }) =>
              user.isAdmin ? <AdminPage match={match} /> : <Redirect to="/" />
            }
          />
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
});

export default connect(mapStateToProps)(App);
