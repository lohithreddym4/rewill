"use client";

import React, { useState } from "react";
import styles from "../styles/ListPage.module.css";

const ListForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    pricingOption: "perDay",
    street: "",
    city: "",
    state: "",
    pincode: "",
    images: [],
    thumbnail: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [agreed, setAgreed] = useState(false); // For user consent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsentChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleImageUpload = (files) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    handleImageUpload(files);
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
    if (!agreed) {
      alert("You must agree to the terms before listing the item.");
      return;
    }
    console.log("Item listed:", formData);
    alert("Item successfully listed with thumbnail and location!");
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

        {/* Street Input */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* City Input */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* State Input */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Pincode Input */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        {/*User Consent*/}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              onChange={handleConsentChange}
              className={styles.checkbox}
            />
            I confirm that the product details are true and authentic, and the images are the latest ones of the product.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton} disabled={!agreed}>
          List Item
        </button>
      </form>
    </div>
  );
};

export default ListForm;
