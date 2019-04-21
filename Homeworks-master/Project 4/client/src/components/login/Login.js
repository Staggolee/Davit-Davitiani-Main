import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser, updateCart } from "../../actions/authActions";
import { getErrors } from "../../actions/errorActions";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.loginUsername = React.createRef();
    this.loginPassword = React.createRef();

    this.name = React.createRef();
    this.username = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.password2 = React.createRef();
    this.balance = React.createRef();
    this.birthdate = React.createRef();
  }

  state = { user: null };

  onLoginSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5000/api/customers/login";
    const username = this.loginUsername.current.value;
    const password = this.loginPassword.current.value;

    axios
      .post(url, { username, password })
      .then(({ data }) => {
        // Reset if there were previous login errors
        this.props.getErrors(null);

        this.props.setCurrentUser(data);
        const { id } = data;
        const url = `http://localhost:5000/api/customers/${id}/cart`;

        // Save logged in user
        localStorage.setItem("_auth_user_", JSON.stringify(data));

        axios
          .get(url)
          .then(({ data }) => {
            this.props.updateCart(data);
          })
          .catch(err => console.log(err.response.data));
      })
      .catch(err => this.props.getErrors(err.response.data));
  };

  onSignupSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5000/api/customers";

    const name = this.name.current.value;
    const username = this.username.current.value;
    const email = this.email.current.value;
    const password = this.password.current.value;
    const password2 = this.password2.current.value;
    const balance = this.balance.current.value;
    const birthdate = this.birthdate.current.value;

    axios
      .post(url, {
        name,
        username,
        email,
        password,
        password2,
        balance,
        birthdate,
      })
      .then(({ data }) => {
        this.props.getErrors(null);

        this.props.setCurrentUser(data);

        // Save registered  user
        localStorage.setItem("_auth_user_", JSON.stringify(data));
      })
      .catch(err => this.props.getErrors(err.response.data));
  };

  render() {
    return (
      <div className="login-container">
        <div className="sidebar-nav" />
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <form onSubmit={this.onLoginSubmit}>
                  {this.props.errors && (
                    <span className="login-error">
                      {this.props.errors.login}
                    </span>
                  )}
                  <div className="group">
                    <label htmlFor="loginuser" className="login-label">
                      Username
                    </label>
                    <input
                      ref={this.loginUsername}
                      name="username"
                      id="loginuser"
                      type="text"
                      className="login-input"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="loginpass" className="login-label">
                      Password
                    </label>
                    <input
                      ref={this.loginPassword}
                      name="password"
                      id="loginpass"
                      type="password"
                      className="login-input"
                      data-type="password"
                      required
                    />
                  </div>

                  <div className="group">
                    <button type="submit" className="login-btn">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="sign-up-htm">
                <form onSubmit={this.onSignupSubmit}>
                  <div className="group">
                    <label htmlFor="fullname" className="login-label">
                      Full Name
                    </label>
                    <input
                      ref={this.name}
                      name="name"
                      id="fullname"
                      type="text"
                      className="login-input"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="login-label">
                      Username
                    </label>
                    <input
                      ref={this.username}
                      name="username"
                      id="user"
                      type="text"
                      className="login-input"
                      required
                    />
                  </div>
                  {this.props.errors && (
                    <span className="register-password-error">
                      {this.props.errors.password}
                    </span>
                  )}
                  <div className="group password-group">
                    <label htmlFor="pass" className="login-label">
                      Password
                    </label>
                    <input
                      ref={this.password}
                      name="password"
                      id="pass"
                      type="password"
                      className="login-input"
                      data-type="password"
                      required
                    />
                    <label htmlFor="pass2" className="login-label">
                      Repeat Password
                    </label>
                    <input
                      ref={this.password2}
                      name="password2"
                      id="pass2"
                      type="password"
                      className="login-input"
                      data-type="password"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="login-label">
                      Email Address
                    </label>
                    <input
                      ref={this.email}
                      name="email"
                      id="email"
                      type="email"
                      className="login-input"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="balance" className="login-label">
                      Balance
                    </label>
                    <input
                      ref={this.balance}
                      name="balance"
                      id="balance"
                      type="number"
                      className="login-input"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="birthdate" className="login-label">
                      Birthdate
                    </label>
                    <input
                      ref={this.birthdate}
                      name="birthdate"
                      id="birthdate"
                      type="date"
                      className="login-input"
                      required
                    />
                  </div>
                  <div className="group">
                    <button
                      type="submit"
                      className="login-btn"
                      defaultValue="Sign Up"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, errors }) => ({
  user: auth.user,
  // isLogged: auth.isAuthenticated,
  errors,
});

export default connect(
  mapStateToProps,
  { setCurrentUser, updateCart, getErrors }
)(Login);
