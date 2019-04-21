import React from "react";
import "./Filters.css";
import RadioFilter from "./RadioFilter";
import ChkboxFilter from "./ChkboxFilter";
import PriceFilter from "./PriceFilter";

export default function Filters({
  filters,
  onRadioInput,
  onCheckboxInput,
  onPriceInput,
}) {
  return (
    <div className="filters">
      <RadioFilter
        filterName="Category"
        currentValue={filters.category}
        onChange={onRadioInput}
        categories={[
          "All categories",
          "T-shirts",
          "Sweaters",
          "Jackets",
          "Pants",
          "Shorts",
        ]}
      />

      <RadioFilter
        filterName="Size"
        currentValue={filters.size}
        onChange={onRadioInput}
        categories={["Any size", "S", "M", "L", "XL"]}
      />

      <ChkboxFilter
        filterName="Brands"
        currentValues={filters.brands}
        onChange={onCheckboxInput}
        brands={["Nike", "Adidas", "Armani", "Dolce"]}
      />

      <PriceFilter
        filterName="Price"
        currentValue={filters.price}
        onChange={onPriceInput}
      />
    </div>
  );
}
