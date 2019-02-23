import React, { Component } from "react";
import User from "./User";
import mapItems from "../mapItems";

export default class Users extends Component {
  state = {
    users: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(users => {
        // console.log(users);
        this.setState({ users });
      })
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Users</h1>
        <div className="container flex-box">
          {this.state.users &&
            mapItems(this.state.users, this.props.count, user => (
              <User key={user.id} user={user} />
            ))}
        </div>
      </>
    );
  }
}
