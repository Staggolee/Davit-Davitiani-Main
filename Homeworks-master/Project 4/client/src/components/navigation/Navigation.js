import React from "react";
import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { toggleCart } from "../../actions/cartActions";
import { toggleMenu } from "../../actions/menuActions";

const Navigation = ({
  toggleCart,
  toggleMenu,
  menuVisible,
  isLogged,
  user,
  logoutUser,
}) => {
  return (
    <>
      <div className="header-nav">
        <ul className="main-nav">
          <li className="main-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/men"
              className="main-nav__link"
            >
              Men
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/women"
              className="main-nav__link"
            >
              Women
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/about"
              className="main-nav__link"
            >
              About Us
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/contact"
              className="main-nav__link"
            >
              Contact
            </NavLink>
          </li>

          {isLogged && user.isAdmin && (
            <li className="main-nav__item">
              <NavLink
                activeClassName="active-main-nav-link"
                to="/admin/customers"
                className="main-nav__link"
              >
                Admin Panel
              </NavLink>
            </li>
          )}
        </ul>
        <Link to="/" className="title logo-link">
          <img alt="Site Logo" className="logo" src="/logo.svg" />
        </Link>

        <div className="aditional-nav">
          {/* <div className="aditional-nav__item search">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
            <span className="hidden-btn search-btn lnr lnr-magnifier" />
          </div> */}
          <div className="aditional-nav__item welcome-msg">
            Welcome, {isLogged && user ? user.name.split(" ")[0] : "Guest"}!
          </div>
          <span
            onClick={toggleCart}
            className="aditional-nav__item cart-btn lnr lnr-cart"
          >
            {user.cart && user.cart.length ? (
              <span className="cart-notification">
                {user.cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            ) : null}
          </span>
          {isLogged && (
            <NavLink
              title="Purchase History"
              activeClassName="active-main-nav-link"
              to="/purchased"
              className="aditional-nav__item"
            >
              <span className="purchase-history lnr lnr-history" />
            </NavLink>
          )}
          {isLogged ? (
            <span
              title="Log Out"
              onClick={() => {
                localStorage.removeItem("_auth_user_");
                logoutUser();
              }}
              className="aditional-nav__item user-logout lnr lnr-exit"
            />
          ) : (
            <NavLink
              title="Log In"
              to="/login"
              activeClassName="active-main-nav-link"
              className="aditional-nav__item"
            >
              <span className="user-login lnr lnr-user" />
            </NavLink>
          )}
        </div>
      </div>
      <div className="mobile-nav">
        <div onClick={toggleMenu}>
          <span className="mobile-menu-btn lnr lnr-menu" />
        </div>
        <Link className="title" to="/">
          <img alt="Site Logo" className="logo" src="/logo.svg" />
        </Link>

        <span onClick={toggleCart} className="cart-btn lnr lnr-cart">
          {user.cart && user.cart.length ? (
            <span className="cart-notification">
              {user.cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          ) : null}
        </span>
        <div
          onClick={toggleMenu}
          className={`mobile-menu-wrapper ${menuVisible &&
            "mobile-menu-visilbe"}`}
        />
        <ul className="mobile-nav-menu">
          <span onClick={toggleMenu} className="menu-close lnr lnr-cross" />
          <li>
            <div>
              Welcome, {isLogged && user ? user.name.split(" ")[0] : "Guest"}!
            </div>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/men"
              className="mobile-nav__link"
            >
              Men
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/women"
              className="mobile-nav__link"
            >
              Women
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/about"
              className="mobile-nav__link"
            >
              About Us
            </NavLink>
          </li>
          <li className="mobile-nav__item">
            <NavLink
              activeClassName="active-main-nav-link"
              to="/contact"
              className="mobile-nav__link"
            >
              Contact
            </NavLink>
          </li>
          {isLogged && (
            <li className="mobile-nav__item">
              <NavLink
                title="Purchase History"
                activeClassName="active-main-nav-link"
                to="/purchased"
                className="mobile-nav__link"
              >
                Purchase History
              </NavLink>
            </li>
          )}
          {isLogged && user.isAdmin && (
            <li className="mobile-nav__item">
              <NavLink
                activeClassName="active-main-nav-link"
                to="/admin/customers"
                className="mobile-nav__link"
              >
                Admin Panel
              </NavLink>
            </li>
          )}
          {/* <li className="mobile-nav__item">
            <label className="mobile-search-wrapper">
              <input
                className="mobile-search__input"
                name="search"
                placeholder="Search"
              />
              <span className="search-btn lnr lnr-magnifier" />
            </label>
          </li> */}
          <li className="mobile-nav__item">
            {isLogged ? (
              <div>
                <span
                  title="Log Out"
                  onClick={() => {
                    localStorage.removeItem("_auth_user_");
                    logoutUser();
                  }}
                  className="user-logout lnr lnr-exit"
                />
              </div>
            ) : (
              <div>
                <NavLink
                  title="Log In"
                  to="/login"
                  activeClassName="active-main-nav-link"
                >
                  <span className="user-login lnr lnr-user" />
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ auth, menu }) => ({
  isLogged: auth.isAuthenticated,
  user: auth.user,
  menuVisible: menu.visible,
});

export default connect(
  mapStateToProps,
  { logoutUser, toggleCart, toggleMenu }
)(Navigation);
