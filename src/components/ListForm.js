"use client";

import React, { useState } from "react";
import styles from "../styles/ListPage.module.css";

const ListForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form (Replace this with API call later)
    console.log("Item listed:", formData);
    alert("Item successfully listed!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List an Item</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Item Name */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="name">Item Name:</label>
          <input className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="description">Description:</label>
          <textarea className="textarea"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        {/* Category */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="category">Category:</label>
          <select className="select"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Vehicles">Vehicles</option>
          </select>
        </div>

        {/* Price */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="price">Rental Price (per day):</label>
          <input className="input"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="location">Location:</label>
          <input className="input"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image Upload */}
        <div className={styles.formGroup}>
          <label className="label" htmlFor="image">Upload Image:</label>
          <input className="input" type="file" id="image" name="image" onChange={handleImageUpload} required />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          List Item
        </button>
      </form>
    </div>
  );
};

export default ListForm;
