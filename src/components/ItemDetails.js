"use client";

import React, { useState } from "react";
import styles from "../styles/ItemDetails.module.css";
import Reviews from "./Reviews";
import Image from "next/image";

// Chat component
const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { sender: "Renter", message: "Hello, how can I assist you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { sender: "Consumer", message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

// Main ItemDetails Component
const ItemDetails = ({ item }) => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => setShowChat(!showChat);

  return (
    <div className={styles.container}>
      {/* Item Image */}
      <div className={styles.imageWrapper}>
        <div>{console.log(item.image)}</div>
        <img src={item.image.src} alt={item.name} className={styles.itemImage} />
      </div>

      {/* Item Info */}
      <div className={styles.details}>
        <h1 className={styles.itemName}>{item.name}</h1>
        <p className={styles.category}>Category: {item.category}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>Price: ₹{item.price}</p>
        <p className={styles.location}>📍 Location: {item.location}</p>
        <p className={styles.availability}>
          {item.availability === "Available" ? "✅ Available" : "❌ Unavailable"}
        </p>

        {/* Rent Button */}
        <button className={styles.rentButton}>Rent Now</button>
      </div>

      {/* Reviews Section */}
      <Reviews reviews={item.reviews} />

      {/* Chat Button */}
      <button
        className={styles.chatButton}
        onClick={toggleChat}
      >
        {showChat ? "Close Chat" : "Chat with the Renter"}
      </button>

      {/* Chat Window */}
      {showChat && <ChatComponent />}
    </div>
  );
};

export default ItemDetails;
