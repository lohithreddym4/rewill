"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import styles from "../../styles/SearchPage.module.css";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const items = [
    {
      id: 1,
      name: "Canon EOS 1500D Camera",
      category: "Electronics",
      image: "/images/camera.jpg",
      price: "$25/day",
      location: "New York",
      availability: "Available",
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      category: "Electronics",
      image: "/images/macbook.jpg",
      price: "$50/day",
      location: "San Francisco",
      availability: "Unavailable",
    },
    {
      id: 3,
      name: "Camping Tent",
      category: "Outdoors",
      image: "/images/tent.jpg",
      price: "$10/day",
      location: "Seattle",
      availability: "Available",
    },
  ];
  const results = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Results for: &quot;{query}&quot;</h1>
      {results.length > 0 ? (
        <ul className={styles.results}>
          {results.map((item) => (
            <li key={item.id} className={styles.resultItem}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <a href={`/items/${item.id}`} className={styles.viewLink}>
                View Item
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>No items found for your search.</p>
      )}
    </div>
  );
};

export default SearchPage;
