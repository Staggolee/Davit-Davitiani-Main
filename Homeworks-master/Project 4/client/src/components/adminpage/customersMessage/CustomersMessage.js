import React from "react";
import "./CustomerMSG.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CustomerMessages extends React.Component {
  state = {
    message: null,
  };
  componentDidMount() {
    const messageid = this.props.match.params.prodId;
    const url = `http://localhost:5000/api/admin/messages/${messageid}`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          message: data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="res-messages">
        <Link to="../messages" className="arrow left" />
        <div className="msg-sender-wrapper">
          <span className="msg-from">From:</span>
          <span className="msg-from-email">
            {this.state.message && this.state.message.email}
          </span>
        </div>

        <div className="user-message-wrapper">
          <p className="user-message">
            {this.state.message && this.state.message.message}
          </p>
        </div>
      </div>
    );
  }
}
