import React from "react";
import "./Customer.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: false,
    };

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.usernameInput = React.createRef();
    this.birthdateInput = React.createRef();
  }

  updateUser = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}`;

    const name = this.nameInput.current.value;
    const email = this.emailInput.current.value;
    const username = this.usernameInput.current.value;
    const birthdate = this.birthdateInput.current.value;

    axios
      .put(url, { name, email, username, birthdate })
      .then(({ data }) => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      })
      .catch(err => console.log(err));
  };

  getCurrentUser = () => {
    const currentUser = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/customers/${currentUser}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          user: data,
        });
      })
      .catch(err => console.log(err));

    // Get user's cart
    const userCartUrl = `${url}/cart`;
    axios
      .get(userCartUrl)
      .then(({ data }) => {
        this.setState({
          cart: data,
        });
      })
      .catch(err => console.log(err));

    // Get purchased products
    const purchasedUrl = `${url}/purchased`;
    axios
      .get(purchasedUrl)
      .then(({ data }) => {
        this.setState({
          purchased: data,
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    return (
      <div className="user-details">
        <div className="button-wrapper">
          <Link to="../customers" className="arrow left" />
          <button onClick={this.updateUser} className="user-btn" type="button">
            Update User
          </button>
        </div>
        <div
          className={`product-add-loading-wrapper ${this.state.loading &&
            "product-add-loading-show"}`}
        >
          <span className="lnr lnr-checkmark-circle" />
          Customer Updated Successfuly!
        </div>
        <div className="user-detail-wrapper">
          <div className="user-img" />
          <div className="user-personal-info">
            <div className="user-name">Name</div>
            <input
              ref={this.nameInput}
              name="name"
              type="text"
              className="userinput"
              defaultValue={this.state.user && this.state.user.name}
            />
          </div>
          <div className="user-info">
            <div className="user-personal-info">
              <p className="user-p">Email</p>

              <input
                ref={this.emailInput}
                name="email"
                type="text"
                className="userinput"
                defaultValue={this.state.user && this.state.user.email}
              />
            </div>

            <div className="user-personal-info">
              <p className="user-p">Birthdate</p>
              <input
                ref={this.birthdateInput}
                name="birthdate"
                type="date"
                className="userinput"
                defaultValue={this.state.user && this.state.user.birthdate}
              />
            </div>
            <div className="user-personal-info">
              <p className="user-p">Username</p>
              <input
                ref={this.usernameInput}
                name="username"
                type="text"
                className="userinput"
                defaultValue={this.state.user && this.state.user.username}
              />
            </div>
          </div>
          <div className="user-balance">
            <p className="ballance">Balance</p>
            <span className="ballance-span">
              {this.state.user && this.state.user.balance}
            </span>
          </div>
        </div>
        <div className="user-details-cart">
          <ul className="user-cartlist">
            <li className="user-cartlist__title">Shopping Cart</li>
            {this.state.cart &&
              this.state.cart.map((prod, ind) => (
                <li key={`${prod.id}:${ind}`} className="user-cartlist__item">
                  {prod.brand} {prod.name}, ${prod.price}
                </li>
              ))}
          </ul>
          <ul className="user-productlist">
            <li className="user-cartlist__title">Purchased Products</li>
            {this.state.purchased &&
              this.state.purchased.map((prod, ind) => (
                <li key={`${prod.id}:${ind}`} className="user-cartlist__item">
                  {prod.brand} {prod.name}, ${prod.price}
                </li>
              ))}
          </ul>
        </div>
        <br />
      </div>
    );
  }
}
