"use client";

import React, { useState } from "react";
import styles from "../styles/RentalChatComp.module.css"; // CSS for ChatComponent

const ChatComponent = ({ renterId }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: messageInput, sender: "rentee", timestamp: new Date() },
    ]);

    // Mock renter's response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for reaching out! How can I assist you?",
          sender: "renter",
          timestamp: new Date(),
        },
      ]);
    }, 1000);

    setMessageInput("");
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "rentee" ? styles.rentee : styles.renter
            }`}
          >
            <p>{message.text}</p>
            <span className={styles.timestamp}>
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
