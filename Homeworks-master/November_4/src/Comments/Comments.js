import React, { Component } from "react";
import Comment from "./Comment";
import mapItems from "../mapItems";

export default class Comments extends Component {
  state = {
    comments: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(comments => this.setState({ comments }))
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Comments</h1>
        <div className="container flex-box">
          {this.state.comments &&
            mapItems(this.state.comments, this.props.count, comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
        </div>
      </>
    );
  }
}
