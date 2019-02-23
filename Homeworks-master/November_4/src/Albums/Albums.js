import React, { Component } from "react";
import Album from "./Album";
import mapItems from "../mapItems";

export default class Albums extends Component {
  state = {
    albums: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(albums => this.setState({ albums }))
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Albums</h1>
        <div className="container flex-box">
          {this.state.albums &&
            mapItems(this.state.albums, this.props.count, album => (
              <Album key={album.id} album={album} />
            ))}
        </div>
      </>
    );
  }
}
