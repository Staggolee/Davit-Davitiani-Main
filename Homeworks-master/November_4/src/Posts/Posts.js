import React, { Component } from "react";
import Post from "./Post";
import mapItems from "../mapItems";

export default class Posts extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Posts</h1>
        <div className="container flex-box">
          {this.state.posts &&
            mapItems(this.state.posts, this.props.count, post => (
              <Post key={post.id} post={post} />
            ))}
        </div>
      </>
    );
  }
}
