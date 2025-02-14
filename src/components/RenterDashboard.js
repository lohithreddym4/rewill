"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/RenterDashboard.module.css"; // Adjust this based on your styling
import ListForm from "./ListForm";
import ManageItems from "./ManageProducts";
import Inbox from "./Inbox";
import Payments from "./Payments";

const RenterDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("manage"); // Manage Products by default

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
          <ManageItems/>
        )}

        {selectedTab === "chats" && (
          <div>
            <h1 className={styles.contentTitle}>Chats with Consumers</h1>
            <p>Here you can manage chats with potential consumers.</p>
            {/* Chat List or Chat Management UI */}
          </div>
        )}

        {selectedTab === "payments" && (
          <Payments/>
        )}
        {
          selectedTab === "inbox" && (
            <Inbox/>
          )
        }

        {selectedTab === "list" && (
            <ListForm/>
        )}
      </div>
    </div>
  );
};

export default RenterDashboard;
