"use client";

import React, { useState } from "react";
import styles from "../styles/ListPage.module.css";

const ListForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    pricingOption: "perDay", // Default to 'perDay'
    location: "",
    images: [],
    thumbnail: null, // To store the selected thumbnail
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleImageClick = (image) => {
    setPreviewImage(URL.createObjectURL(image));
  };

  const handleThumbnailSelect = (image) => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: image,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item listed:", formData);
    alert("Item successfully listed with thumbnail!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List an Item</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Item Name */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={styles.textarea}
            required
          />
        </div>

        {/* Category */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select a Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Vehicles">Vehicles</option>
          </select>
        </div>

        {/* Rental Price */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="price">Rental Price (₹):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Pricing Options */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Pricing Option:</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="pricingOption"
                value="perHour"
                checked={formData.pricingOption === "perHour"}
                onChange={handleChange}
                className={styles.radioInput}
              />
              Per Hour
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="pricingOption"
                value="perDay"
                checked={formData.pricingOption === "perDay"}
                onChange={handleChange}
                className={styles.radioInput}
              />
              Per Day
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="pricingOption"
                value="perMonth"
                checked={formData.pricingOption === "perMonth"}
                onChange={handleChange}
                className={styles.radioInput}
              />
              Per Month
            </label>
          </div>
        </div>

        {/* Image Upload */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="images">Upload Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className={styles.input}
          />
        </div>

        {/* Image Thumbnails */}
        <div className={styles.imagePreview}>
          {formData.images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className={styles.previewImage}
                onClick={() => handleImageClick(image)}
              />
              <button
                type="button"
                className={`${styles.thumbnailButton} ${
                  formData.thumbnail === image ? styles.selectedThumbnail : ""
                }`}
                onClick={() => handleThumbnailSelect(image)}
              >
                {formData.thumbnail === image ? "Selected" : "Set as Thumbnail"}
              </button>
            </div>
          ))}
        </div>

        {/* Enlarged Image Preview */}
        {previewImage && (
          <div className={styles.previewOverlay} onClick={() => setPreviewImage(null)}>
            <img src={previewImage} alt="Preview" className={styles.previewLarge} />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          List Item
        </button>
      </form>
    </div>
  );
};

export default ListForm;
