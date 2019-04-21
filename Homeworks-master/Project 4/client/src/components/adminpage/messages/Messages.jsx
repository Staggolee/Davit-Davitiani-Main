import React, { Component } from "react";
import axios from "axios";

import Table from "../../table/Table";

export default class Messages extends Component {
  state = {
    messages: null,
    loading: false,
  };

  updateMessages = () => {
    const url = "http://localhost:5000/api/admin/messages";
    axios
      .get(url)
      .then(({ data }) => this.setState({ messages: data }))
      .catch(err => console.log(err));
  };

  removeMessage = id => {
    this.setState({ loading: true });
    const url = `http://localhost:5000/api/admin/messages/${id}`;
    axios
      .delete(url)
      .then(res => {
        this.updateMessages();
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateMessages();
  }

  render() {
    return (
      <Table
        items={this.state.messages}
        tHeads={["email", "date"]}
        remove={this.removeMessage}
        match={this.props.match}
        loading={this.state.loading}
      />
    );
  }
}
