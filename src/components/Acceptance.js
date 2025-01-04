"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/AcceptancePage.module.css"; // Adjust this based on your styling

const AcceptancePage = () => {
  const [accepted, setAccepted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [product, setProduct] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId"); // Get the product ID from the query string

  useEffect(() => {
    if (productId) {
      const dummyResponse = {
        name: "Electric Bike",
        description: "A high-quality electric bike for daily commutes. It's comfortable, eco-friendly, and perfect for both city and suburban rides.",
        price: 500,
        images: [
          "/images/bike1.jpg",
          "/images/bike2.jpg",
          "/images/bike3.jpg"
        ]
      };
      setProduct(dummyResponse);
    }
  }, [productId]); // Run this effect when productId changes

  const handleAccept = () => {
    if (agreedToTerms) {
      setAccepted(true);
      // Logic to release payment to the renter (you can call your API for this)
      alert("You have accepted the product. Payment has been released.");
    } else {
      alert("Please agree to the terms before accepting.");
    }
  };

  const handleReject = () => {
    // Logic for rejection (can involve refund or notify both parties)
    alert("You have rejected the product. The offer is canceled.");
  };

  if (!product) {
    return <p>Loading product details...</p>; // Show loading state until product data is fetched
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Inspection and Acceptance</h1>

      <div className={styles.productDetails}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price: ₹{product.price} per day</strong></p>

        <div className={styles.images}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className={styles.productImage}
            />
          ))}
        </div>
      </div>

      <div className={styles.conditions}>
        <h3>Agree to the conditions:</h3>
        <label>
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={() => setAgreedToTerms(!agreedToTerms)}
          />
          I have physically inspected the product and accept the conditions.
        </label>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.acceptButton}
          onClick={handleAccept}
          disabled={!agreedToTerms}
        >
          Accept Product
        </button>

        <button className={styles.rejectButton} onClick={handleReject}>
          Reject Product
        </button>
      </div>

      {accepted && <p className={styles.confirmationMessage}>You have accepted the product!</p>}
    </div>
  );
};

export default AcceptancePage;
