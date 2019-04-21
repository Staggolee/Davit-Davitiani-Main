import React, { Component } from "react";
import "./Contact.css";
import axios from "axios";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
    };

    this.email = React.createRef();
    this.message = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5000/api/admin/messages";
    const email = this.email.current.value;
    const message = this.message.current.value;

    axios
      .post(url, { email, message })
      .then(res => {
        this.email.current.value = "";
        this.message.current.value = "";
        this.setState({ sent: true });
        setTimeout(() => {
          this.setState({ sent: false });
        }, 5000);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="top-image">
          <h1 className="contact">Contact</h1>
        </div>
        <div className="contact-flex-container">
          <div className="container-1">
            <form onSubmit={this.onSubmit}>
              <p className="contact-text">Send Us A Message</p>
              {this.state.sent && (
                <span className="sent-status">
                  Message Sent <span className="lnr lnr-checkmark-circle" />
                </span>
              )}
              <input
                ref={this.email}
                name="email"
                type="email"
                className="contact-input"
                placeholder="Your Email"
                required
              />

              <textarea
                ref={this.message}
                name="message"
                className="contact-textarea"
                placeholder="How can we help you?"
                required
              />
              <br />
              <button className="contact-btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="container-2">
            <div className="contact-address">
              <i className="fas fa-map-marker-alt" />
              <p>Address</p>
            </div>
            <div className="address-nav">
              <p>Chavchavadze Avenue 10,</p>
              <span>Georgia Tbilisi</span>
            </div>
            <div className="contact-number">
              <i className="fas fa-phone" />
              <p>Contact Us</p>
            </div>
            <div className="address-nav">
              <p>+995 0322 33 33 33</p>
            </div>
            <div className="contact-number">
              <i className="fas fa-envelope" />
              <p>Sale Support</p>
            </div>
            <div className="address-nav">
              <p>contact@limited.com</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
