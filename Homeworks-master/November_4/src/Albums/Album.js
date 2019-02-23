import React from "react";

const Album = ({ album }) => (
  <div className="album">
    <p className="album__title">{album.title.toUpperCase()}</p>
    <p className="album__user">Album Owner Id: {album.userId}</p>
  </div>
);

export default Album;
