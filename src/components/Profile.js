"use client";

import React, { useState } from "react";
import styles from "../styles/ProfilePage.module.css";
import Image from "next/image";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "1234567890",
    address: "123 Street, City, State, Pincode",
    profilePicture: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePicture: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    setEditMode(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>

      <div className={styles.profileSection}>
        <div className={styles.profilePicture}>
          <Image
            src={previewImage || "/default-profile.png"} // Default image if no profile picture is uploaded
            alt="Profile"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          {editMode && (
            <div>
              <label htmlFor="profilePicture" className={styles.uploadLabel}>
                Upload Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.fileInput}
              />
            </div>
          )}
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.field}>
            <label className={styles.label}>Name:</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            ) : (
              <p className={styles.value}>{formData.name}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            ) : (
              <p className={styles.value}>{formData.email}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Mobile:</label>
            {editMode ? (
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className={styles.input}
              />
            ) : (
              <p className={styles.value}>{formData.mobile}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Address:</label>
            {editMode ? (
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className={styles.textarea}
              />
            ) : (
              <p className={styles.value}>{formData.address}</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        {editMode ? (
          <>
            <button onClick={handleSave} className={styles.saveButton}>
              Save
            </button>
            <button onClick={handleEditToggle} className={styles.cancelButton}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleEditToggle} className={styles.editButton}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
