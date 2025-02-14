"use client";

import React, { useState } from "react";
import styles from "../styles/Payments.module.css";

const Payments = () => {
  // Sample data
  const [orders, setOrders] = useState([
    { id: "ORD12345", item: "Gaming Laptop", amount: 1500, status: "Completed", date: "2025-01-15" },
    { id: "ORD12346", item: "Smartphone", amount: 800, status: "Cancelled", date: "2025-01-10" },
    { id: "ORD12347", item: "Office Chair", amount: 200, status: "Returned", date: "2025-01-08" },
    { id: "ORD12348", item: "Noise Cancelling Headphones", amount: 300, status: "Completed", date: "2025-01-05" },
    { id: "ORD12349", item: "Smartwatch", amount: 150, status: "Pending", date: "2025-01-03" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("date"); // Default sort by date
  const [filterStatus, setFilterStatus] = useState("All");

  // Filter orders based on search, sort, and status
  const filteredOrders = orders
    .filter((order) => {
      const matchesSearch =
        order.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === "All" || order.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "date") return new Date(b.date) - new Date(a.date);
      if (sortOrder === "amount") return b.amount - a.amount;
      return 0;
    });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Payments</h1>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search by Order ID or Item Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Returned">Returned</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className={styles.row}>
                  <td className={styles.orderId}>{order.id}</td>
                  <td className={styles.itemName}>{order.item}</td>
                  <td className={styles.amount}>${order.amount}</td>
                  <td className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                    {order.status}
                  </td>
                  <td className={styles.date}>{order.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={styles.noOrders}>
                  No orders found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
