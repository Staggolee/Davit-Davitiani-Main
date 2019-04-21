import React from "react";
import "./ChkboxInput.css";

export default function ChkboxInput({ onChange, name, text, value, checked }) {
  return (
    <div className="cntr">
      <input
        id={value}
        type="checkbox"
        className="inp-cbx"
        style={{ display: "none" }}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="cbx" htmlFor={value}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{text}</span>
      </label>
    </div>
  );
}
