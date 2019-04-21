import React, { Component } from "react";
import axios from "axios";

import Table from "../../table/Table";

export default class Customers extends Component {
  state = {
    customers: null,
    loading: false,
  };

  updateCustomers = () => {
    const url = "http://localhost:5000/api/customers";
    axios
      .get(url)
      .then(({ data }) => this.setState({ customers: data }))
      .catch(err => console.log(err));
  };

  removeCustomer = id => {
    this.setState({ loading: true });
    const url = `http://localhost:5000/api/customers/${id}`;
    axios
      .delete(url)
      .then(res => {
        this.updateCustomers();
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updateCustomers();
  }

  render() {
    return (
      <Table
        items={this.state.customers}
        tHeads={["name", "email", "balance"]}
        remove={this.removeCustomer}
        match={this.props.match}
        loading={this.state.loading}
      />
    );
  }
}
