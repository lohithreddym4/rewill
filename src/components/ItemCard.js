"use client";
import React from "react";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemCard = ({ item }) => {
  const router = useRouter();
  return (
    <div className={styles.itemCard} onClick={() => router.push(`/items/${item.id}`)}>
      <Image
        src={item.image}
        alt={item.name}
        className={styles.itemImage}
        width={100}
        height={100}
      />
      <h3 className={styles.itemName}>{item.name}</h3>
      <p className={styles.itemCategory}>{item.category}</p>
      <p className={styles.itemLocation}>📍 {item.location}</p>
    </div>
  );
};

export default ItemCard;
