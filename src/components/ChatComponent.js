"use client";

import React, { useState } from "react";
import styles from "../styles/ProductPage.module.css"; // Adjust this for your styles

const ProductPage = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Electric Bike</h1>
      <p className={styles.description}>A high-quality electric bike for daily commutes.</p>
      <p className={styles.price}>Price: ₹500 per day</p>

      {/* Button to open the chat */}
      <button className={styles.chatButton} onClick={toggleChat}>
        {showChat ? "Close Chat" : "Chat with the Renter"}
      </button>

      {/* Show the chat component when showChat is true */}
      {showChat && <ChatComponent />}
    </div>
  );
};



export default ProductPage;
