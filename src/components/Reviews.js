import React from "react";
import styles from "../styles/ItemDetails.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviewTitle}>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <p className={styles.user}>{review.user}</p>
          <p className={styles.rating}>⭐ {review.rating}/5</p>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
