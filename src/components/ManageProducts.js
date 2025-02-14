"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/ManageItems.module.css";
import Image from "next/image";

const ManageItems = () => {
  const [items, setItems] = useState([]); // Store listed items
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const [filteredItems, setFilteredItems] = useState([]); // Store filtered items

  useEffect(() => {
    // Mock data fetch (replace with actual API call)
    const fetchItems = async () => {
      const mockItems = [
        {
          id: 1,
          name: "Mountain Bike",
          category: "Outdoors",
          price: 500,
          pricingOption: "perDay",
          location: "Bangalore, Karnataka",
          thumbnail: "/bike-thumbnail.jpg",
        },
        {
          id: 2,
          name: "Laptop",
          category: "Electronics",
          price: 1500,
          pricingOption: "perDay",
          location: "Mumbai, Maharashtra",
          thumbnail: "/laptop-thumbnail.jpg",
        },
      ];
      setItems(mockItems);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    // Filter items based on the search query
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchQuery, items]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRemoveItem = (id) => {
    // Remove item logic (update API call here)
    setItems((prev) => prev.filter((item) => item.id !== id));
    alert("Item removed successfully.");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Your Items</h1>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Items List */}
      <div className={styles.itemsList}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <Image
                src={item.thumbnail}
                width={150}
                height={150}
                alt={item.name}
                className={styles.thumbnail}
              />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price} ({item.pricingOption})</p>
                <p>Location: {item.location}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noItems}>No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
