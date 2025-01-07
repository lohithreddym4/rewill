"use client";
import { useState } from "react";
import styles from "../styles/ReviewPage.module.css";

const ReviewPage = ({ itemId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      setError("Please provide a rating between 1 and 5.");
      return;
    }
    if (comment.trim().length < 5) {
      setError("Please provide a valid comment with at least 5 characters.");
      return;
    }

    console.log("Submitting review for item:", itemId);
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Here you would send the review to the server
    // API call goes here

    // Show success message and reset form
    setSuccess(true);
    setError("");
    setRating(0);
    setComment("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Write a Review for Item {itemId}</h2>
      {success && <p className={styles.successMessage}>Review submitted successfully!</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="rating" className={styles.label}>Rating (1-5):</label>
          <input
            type="number"
            id="rating"
            className={styles.input}
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment" className={styles.label}>Comment:</label>
          <textarea
            id="comment"
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;
