import React from "react";

const Photo = ({ photo }) => (
  <div className="image">
    <div className="img">
      <img
        src={`https://source.unsplash.com/user/joelvalve/${Math.floor(
          Math.random() * 399 + 500
        )}x${Math.floor(Math.random() * 399 + 500)}`}
      />
    </div>
    <div>
      <p className="image__title">{photo.title.toUpperCase()}</p>
      <p className="image__album">Album Id: {photo.albumId}</p>
    </div>
  </div>
);

export default Photo;
