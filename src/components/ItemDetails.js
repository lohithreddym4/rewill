import React from "react";
import styles from "../styles/ItemDetails.module.css";
import Reviews from "./Reviews";
import Image from "next/image";

const ItemDetails = ({ item }) => {
  return (
    <div className={styles.container}>
      {/* Item Image */}
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.name} className={styles.itemImage} />
        
         {/* <Image src={item.image} alt={item.name} className={styles.itemImage} width={500} height={500} /> */}
      </div>

      {/* Item Info */}
      <div className={styles.details}>
        <h1 className={styles.itemName}>{item.name}</h1>
        <p className={styles.category}>Category: {item.category}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>Price: {item.price}</p>
        <p className={styles.location}>📍 Location: {item.location}</p>
        <p className={styles.availability}>
          {item.availability === "Available" ? "✅ Available" : "❌ Unavailable"}
        </p>

        {/* Rent Button */}
        <button className={styles.rentButton}>Rent Now</button>
      </div>

      {/* Reviews Section */}
      <Reviews reviews={item.reviews} />
    </div>
  );
};

export default ItemDetails;
