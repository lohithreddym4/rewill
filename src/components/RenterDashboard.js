"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/RenterDashboard.module.css"; // Adjust this based on your styling
import ProductCard from "./ProductCard"; // A small component to display each product
import ListForm from "./ListForm";

const RenterDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("manage"); // Manage Products by default
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock function to fetch products from the database
  const fetchProducts = () => {
    setLoading(true);
    // Simulating fetching products from an API (replace with actual API)
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Electric Bike",
          category: "Transport",
          price: 500,
          availability: "Available",
          image: "/images/bike1.jpg",
        },
        {
          id: 2,
          name: "Camping Tent",
          category: "Outdoor",
          price: 200,
          availability: "Rented",
          image: "/images/tent.jpg",
        },
        {
          id: 3,
          name: "Camera",
          category: "Electronics",
          price: 300,
          availability: "Available",
          image: "/images/camera.jpg",
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Renter Dashboard</h2>
        <ul className={styles.sidebarList}>
          <li
            className={selectedTab === "manage" ? styles.active : ""}
            onClick={() => handleTabChange("manage")}
          >
            Manage Products
          </li>
          <li
            className={selectedTab === "inbox" ? styles.active : ""}
            onClick={() => handleTabChange("inbox")}
          >
            Inbox
          </li>
          <li
            className={selectedTab === "payments" ? styles.active : ""}
            onClick={() => handleTabChange("payments")}
          >
            Payments
          </li>
          <li
            className={selectedTab === "list" ? styles.active : ""}
            onClick={() => handleTabChange("list")}
          >
            List an Item
          </li>
        </ul>
      </div>

      <div className={styles.content}>
        {/* Conditional Rendering for Content Based on Tab */}
        {selectedTab === "manage" && (
          <div>
            <h1 className={styles.contentTitle}>Your Products</h1>
            <button className={styles.addProductButton}>Add New Product</button>

            {loading ? (
              <p>Loading your products...</p>
            ) : (
              <div className={styles.productList}>
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={() => alert(`Deleted ${product.name}`)}
                    onEdit={() => alert(`Editing ${product.name}`)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {selectedTab === "chats" && (
          <div>
            <h1 className={styles.contentTitle}>Chats with Consumers</h1>
            <p>Here you can manage chats with potential consumers.</p>
            {/* Chat List or Chat Management UI */}
          </div>
        )}

        {selectedTab === "payments" && (
          <div>
            <h1 className={styles.contentTitle}>Payments</h1>
            <p>Here you can view and manage your payments and transaction history.</p>
            {/* Payment History UI */}
          </div>
        )}

        {selectedTab === "list" && (
          <div>
            <h1 className={styles.contentTitle}>List a New Item</h1>
            <p>Here you can add a new product for rent.</p>
            <ListForm/>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenterDashboard;
