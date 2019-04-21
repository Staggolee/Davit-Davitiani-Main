import React from "react";
import ChkboxInput from "../util/ChkboxInput";
import "./ChkboxFilter.css";

export default function ChkboxFilter({
  filterName,
  onChange,
  brands,
  currentValues,
}) {
  const name = filterName.toLowerCase();
  return (
    <div className="filter">
      <span className="filter__title">{filterName}</span>
      {brands.map((brand, index) => (
        <ChkboxInput
          key={index}
          onChange={onChange}
          name={name}
          value={brand}
          text={brand}
          checked={currentValues.includes(brand)}
        />
      ))}
    </div>
  );
}
