import React from "react";
import "./AdminPage.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Customers from "./customers/Customers";
import Messages from "./messages/Messages";
import Products from "./products/Products";
import CustomerDetails from "./customerDetails/CustomerDetails";
import CustomerMessage from "./customersMessage/CustomersMessage";
import ProductDetails from "./productDetails/ProductDetails";
import AddProduct from "./addProduct/AddProduct";

const AdminPage = ({ match }) => {
  return (
    <div className="container">
      <nav>
        <ul className="admin-nav">
          <li className="admin-nav__item">
            <NavLink
              exact
              activeClassName="active-admin-link"
              to="/"
              className="admin-nav__link"
            >
              Store
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              activeClassName="active-admin-link"
              to="/admin/customers"
              className="admin-nav__link"
            >
              Customers
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              activeClassName="active-admin-link"
              to="/admin/products"
              className="admin-nav__link"
            >
              Products
            </NavLink>
          </li>
          <li className="admin-nav__item">
            <NavLink
              activeClassName="active-admin-link"
              to="/admin/messages"
              className="admin-nav__link"
            >
              Messages
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={`${match.url}/customers`} component={Customers} />
        <Route
          exact
          path={`${match.url}/customers/:prodId`}
          component={CustomerDetails}
        />
        <Route exact path={`${match.url}/messages`} component={Messages} />
        <Route
          exact
          path={`${match.url}/messages/:prodId`}
          component={CustomerMessage}
        />
        <Route exact path={`${match.url}/products`} component={Products} />
        <Route
          exact
          path={`${match.url}/products/new`}
          component={AddProduct}
        />
        <Route
          exact
          path={`${match.url}/products/:prodId`}
          component={ProductDetails}
        />
      </Switch>
    </div>
  );
};

export default AdminPage;
