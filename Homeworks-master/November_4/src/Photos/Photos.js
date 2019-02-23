import React, { Component } from "react";
import Photo from "./Photo";
import mapItems from "../mapItems";

export default class Photos extends Component {
  state = {
    photos: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(photos => this.setState({ photos }))
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Photos</h1>
        <div className="container flex-box">
          {this.state.photos &&
            mapItems(this.state.photos, this.props.count, photo => (
              <Photo key={photo.id} photo={photo} />
            ))}
        </div>
      </>
    );
  }
}
