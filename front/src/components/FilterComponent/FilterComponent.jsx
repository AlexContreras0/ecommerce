import React, { useState } from "react";

const FilterComponent = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div>
      <label htmlFor="category">Filtro por categorías</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
