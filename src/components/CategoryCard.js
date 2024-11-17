"use client";
import React from "react";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }) => {
  const router = useRouter();
  return (
    <div className={styles.categoryCard} onClick={() => router.push(`/category/${category.id}`)}>
      {/* <img src={category.image} alt={category.name} className={styles.categoryImage} />
       */}
      <Image
        src={category.image}
        alt={category.name}
        className={styles.categoryImage}
        width={100}
        height={100}
      />
      <h3 className={styles.categoryName}>{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
