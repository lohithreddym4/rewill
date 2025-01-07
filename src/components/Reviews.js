import React, { useState } from "react";
import styles from "../styles/ItemDetails.module.css";

const Reviews = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(3); // Initially show 3 reviews

  // Function to handle the "Show More" button click
  const showMoreReviews = () => {
    setVisibleReviews(reviews.length); // Show all reviews
  };

  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviewTitle}>Reviews</h2>
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <div key={review.id || index} className={styles.review}>
          <p className={styles.reviewerName}>{review.reviewer}</p>
          <p className={styles.reviewText}>{review.comment}</p>
          <div className={styles.rating}>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  className={i < review.rating ? styles.filledStar : styles.emptyStar}
                >
                  ★
                </span>
              ))}
          </div>
        </div>
      ))}
      
      {/* Show more button */}
      {visibleReviews < reviews.length && (
        <button onClick={showMoreReviews} className={styles.showMoreButton}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Reviews;
