import React from "react";
import styles from "../styles/ProductCard.module.css"; // Adjust the styles path if necessary

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.cardDetails}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productCategory}>Category: {product.category}</p>
        <p className={styles.productPrice}>Price: ₹{product.price} per day</p>
        <p className={styles.productStatus}>Status: {product.availability}</p>
      </div>

      {/* Action buttons */}
      <div className={styles.actions}>
        <button className={styles.editButton} onClick={() => onEdit(product.id)}>
          Edit
        </button>
        <button className={styles.deleteButton} onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
