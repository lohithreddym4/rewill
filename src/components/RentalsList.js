"use client";

import React, { useState } from "react";
import ChatComponent from "./RentalChatComp"; // Import the ChatComponent
import styles from "../styles/RentalsPage.module.css"; // CSS for RentalsPage

const RentalsPage = () => {
  const [activeChatRenter, setActiveChatRenter] = useState(null); // State to manage active chats
  const [confirmReturn, setConfirmReturn] = useState(null); // State to manage return confirmations

  const rentedItems = [
    {
      id: 1,
      name: "Canon EOS 1500D Camera",
      price: "$25/day",
      rentalPeriod: "7 days",
      startDate: "2025-01-01",
      status: "Active",
      renterId: 101,
      renterName: "John Doe",
      thumbnail: "https://via.placeholder.com/150?text=Canon+Camera",
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      price: "$50/day",
      rentalPeriod: "5 days",
      startDate: "2025-01-02",
      status: "Returned",
      renterId: 102,
      renterName: "Jane Smith",
      thumbnail: "https://via.placeholder.com/150?text=MacBook+Pro",
    },
  ];

  const calculateDaysRented = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  };

  const handleChat = (renterId, renterName) => {
    setActiveChatRenter({ id: renterId, name: renterName });
  };

  const closeChat = () => {
    setActiveChatRenter(null); // Close chat
  };

  const handleReturnRequest = (item) => {
    setConfirmReturn(item); // Open confirmation dialog
  };

  const confirmReturnRequest = () => {
    alert(`Return request for ${confirmReturn.name} submitted!`);
    setConfirmReturn(null); // Close confirmation dialog
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Rentals</h1>

      <ul className={styles.list}>
        {rentedItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <img
              src={item.thumbnail}
              alt={item.name}
              className={styles.thumbnail}
            />
            <div className={styles.itemDetails}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Rental Period: {item.rentalPeriod}</p>
              <p>Days Rented: {calculateDaysRented(item.startDate)}</p>
              <p>Status: {item.status}</p>
              <p>Rented From: {item.renterName}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.chatButton}
                onClick={() => handleChat(item.renterId, item.renterName)}
              >
                Chat with Renter
              </button>
              {item.status === "Active" && (
                <button
                  className={styles.returnButton}
                  onClick={() => handleReturnRequest(item)}
                >
                  Request Return
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Chat Modal */}
      {activeChatRenter && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <h3>Chat with {activeChatRenter.name}</h3>
            <button className={styles.closeButton} onClick={closeChat}>
              ✖
            </button>
          </div>
          <ChatComponent renterId={activeChatRenter.id} />
        </div>
      )}

      {/* Return Confirmation Modal */}
      {confirmReturn && (
        <div className={styles.confirmModal}>
          <h3>Confirm Return Request</h3>
          <p>
            Are you sure you want to submit a return request for{" "}
            <strong>{confirmReturn.name}</strong>?
          </p>
          <div className={styles.modalActions}>
            <button
              className={styles.confirmButton}
              onClick={confirmReturnRequest}
            >
              Yes
            </button>
            <button
              className={styles.cancelButton}
              onClick={() => setConfirmReturn(null)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalsPage;
