import React from "react";
import "./SortBy.css";

export default function Sort({gender}) {
  return (
    <div className="category-wrapper">
      <span className="category">{gender}</span>
      {/* <div className="price-sort">
        <span className="sort-text">Sort By</span>
        <span className="sort-type">
          Price
          <span className="lnr lnr-arrow-up" />
        </span>
        <span className="sort-type">
          Date
          <span className="lnr lnr-arrow-up" />
        </span>
        <span className="sort-type">
          Popularity
          <span className="lnr lnr-arrow-up" />
        </span>
      </div> */}
    </div>
  );
}
