import React from "react";
import "./RadioInput.css";

export default function RadioInput({
  onChange,
  name,
  text,
  value,
  currentValue,
}) {
  return (
    <div className="radio">
      <input
        id={value}
        name={name}
        type="radio"
        onChange={onChange}
        value={value}
        checked={currentValue === value}
      />
      <label htmlFor={value} className="radio-label">
        {text}
      </label>
    </div>
  );
}
