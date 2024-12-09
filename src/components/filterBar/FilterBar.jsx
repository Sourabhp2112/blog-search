import React from 'react'
import './filterBar.css'
function FilterBar({category, setCategory}) {
    const categories = ["All", "React", "Node.js", "CSS", "MongoDB"];

    return (
      <div className="filter-bar">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    );
}

export default FilterBar