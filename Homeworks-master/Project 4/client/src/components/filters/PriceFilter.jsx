import React from "react";
import "./PriceFilter.css";

export default function PriceFilter({ filterName, currentValue, onChange }) {
  return (
    <div className="filter">
      <span className="filter__title">{filterName}</span>
      <div className="price-inputs">
        <div className="price-input--wrapper">
          <input
            id="min"
            className="price-input"
            type="number"
            name="min"
            onChange={onChange}
            value={currentValue.min}
          />
          <label className="price-input-label" htmlFor="min">
            Min
          </label>
        </div>
        <div className="price-input--wrapper">
          <input
            id="max"
            className="price-input"
            type="number"
            name="max"
            onChange={onChange}
            value={currentValue.max}
          />
          <label className="price-input-label" htmlFor="max">
            Max
          </label>
        </div>
      </div>
    </div>
  );
}
