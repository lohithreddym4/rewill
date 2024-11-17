"use client";

import React from "react";
import styles from "../styles/RentalsPage.module.css";

const RentalsList = ({ rentedItems, listedItems }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Rentals</h1>

      {/* Section for Items Rented by the User */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Items I&apos;m Renting</h2>
        {rentedItems.length > 0 ? (
          <ul className={styles.list}>
            {rentedItems.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Rental Period: {item.rentalPeriod}</p>
                <p>Status: {item.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noItems}>You are not renting any items.</p>
        )}
      </section>

      {/* Section for Items Listed by the User */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Items I&apos;ve Listed</h2>
        {listedItems.length > 0 ? (
          <ul className={styles.list}>
            {listedItems.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
                <p>Status: {item.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noItems}>You have not listed any items.</p>
        )}
      </section>
    </div>
  );
};

export default RentalsList;
