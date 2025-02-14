"use client";

import React, { useState } from "react";
import styles from "../styles/ItemDetails.module.css";
import CustomSlider from "./CustomSlider";
import Reviews from "./Reviews";
import NearbyItems from "./NearbyItems";
import {useRouter} from "next/navigation";
import "react-multi-carousel/lib/styles.css";

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

const ItemDetails = ({ item, nearbyItems }) => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => setShowChat(!showChat);

  const renderStars = (rating) => {
    return Array(5)
      .fill(null)
      .map((_, i) => (
        <span key={i} className={i < rating ? styles.filledStar : styles.emptyStar}>
          ★
        </span>
      ));
  };

const router = useRouter();
const handleRent = () => {
  router.push(`/renting?itemId=${item.id}`);
}

  return (
    <div className={styles.container}>
      {/* Image Carousel */}
      <CustomSlider images={item.images} />

      {/* Item Details */}
      <div className={styles.details}>
        <h1 className={styles.itemName}>{item.name}</h1>
        <div className={styles.rating}>{renderStars(item.rating)}</div>
        <p className={styles.category}>Category: {item.category}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}> ₹{item.price}</p>
        <p className={styles.location}>📍{item.location}</p>
        <p className={styles.availability}>
          {item.availability === "Available" ? "✅ Available" : "❌ Unavailable"}
        </p>

        {/* Rent Button */}
        <button className={styles.rentButton} onClick={handleRent}>Rent Now</button>
      </div>

      {/* Reviews Section */}
      <Reviews reviews={item.reviews} />

      {/* Chat Button */}
      <button className={styles.chatButton} onClick={toggleChat}>
        {showChat ? "Close Chat" : "Chat with the Renter"}
      </button>

      {/* Chat Window */}
      {showChat && <ChatComponent />}

      {/* Nearby Items */}
      <NearbyItems nearbyItems={nearbyItems} />
    </div>
  );
};

export default ItemDetails;
