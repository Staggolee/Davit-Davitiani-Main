import React, { Component } from "react";
import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";
import Albums from "./Albums/Albums";
import Photos from "./Photos/Photos";
import Todos from "./Todos/Todos";
import Users from "./Users/Users";

export default class Data extends Component {
  chooseData(url, type, count) {
    switch (type) {
      case "posts":
        return <Posts url={url} count={count} />;
      case "comments":
        return <Comments url={url} count={count} />;
      case "albums":
        return <Albums url={url} count={count} />;
      case "photos":
        return <Photos url={url} count={count} />;
      case "todos":
        return <Todos url={url} count={count} />;
      case "users":
        return <Users url={url} count={count} />;
      default:
        return null;
    }
  }

  render() {
    return this.chooseData(this.props.url, this.props.type, this.props.count);
  }
}
