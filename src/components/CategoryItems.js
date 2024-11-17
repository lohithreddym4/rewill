"use client";
import React, { useState } from "react";
import styles from "../styles/CategoryPage.module.css";
import FilterButton from "./FilterButton";
import Image from "next/image";
import FilteredItem from "./FilteredItem";

const CategoryItems = ({ category, items }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for filter modal
  const [filters, setFilters] = useState({ sortBy: "none", availability: "all" });

  const applyFilters = () => {
    let updatedItems = [...items];

    // Filter by availability
    if (filters.availability === "available") {
      updatedItems = updatedItems.filter((item) => item.availability === "Available");
    }

    // Sort by price
    if (filters.sortBy === "lowToHigh") {
      updatedItems.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (filters.sortBy === "highToLow") {
      updatedItems.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    setFilteredItems(updatedItems);
    setIsFilterOpen(false); // Close modal after applying filters
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{category.name}</h1>
        <FilterButton onClick={() => setIsFilterOpen(true)} />
      </header>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className={styles.filterModal}>
          <div className={styles.modalContent}>
            <h2>Filter Options</h2>

            {/* Sort by Price */}
            <div className={styles.filterOption}>
              <label>Sort by Price:</label>
              <select name="sortBy" onChange={handleFilterChange} value={filters.sortBy}>
                <option value="none">None</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>

            {/* Filter by Availability */}
            <div className={styles.filterOption}>
              <label>Availability:</label>
              <select name="availability" onChange={handleFilterChange} value={filters.availability}>
                <option value="all">All</option>
                <option value="available">Available</option>
              </select>
            </div>

            {/* Apply Filters */}
            <button className={styles.applyButton} onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Items List */}
      <div className={styles.itemsGrid}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <FilteredItem key={item.id} item={item} />)
        ) : (
          <p className={styles.noItems}>No items available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
