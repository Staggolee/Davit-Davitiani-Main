import React from "react";
import RadioInput from "../util/RadioInput";
import "./RadioFilter.css";

const makeFirstUppercase = string =>
  string[0].toUpperCase().concat(string.slice(1));

export default function RadioFilter({
  filterName,
  onChange,
  currentValue,
  categories,
}) {
  const name = filterName.toLowerCase();

  return (
    <div className="filter">
      <span className="filter__title">{filterName}</span>
      {categories.map((category, index) => (
        <RadioInput
          key={index}
          onChange={onChange}
          name={name}
          value={category}
          text={makeFirstUppercase(category)}
          currentValue={currentValue}
        />
      ))}
    </div>
  );
}
