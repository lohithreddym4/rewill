import React from "react";
import styles from "../styles/NearbyItems.module.css"; // You can style the component as needed
import CustomSlider from "./CustomSlider"; // If you want to use the custom slider
import Image from "next/image";

const NearbyItems = ({ nearbyItems }) => {
  return (
    <div className={styles.nearbyContainer}>
      <h2>Items Nearby</h2>
      <div className={styles.nearbyItemsList}>
        <div className={styles.nearbyItemsGrid}>
          {nearbyItems.map((nearbyItem) => (
            <div key={nearbyItem.id} className={styles.nearbyItem}>
              <Image
                src={nearbyItem.image}
                width={200}
                height={200}
                alt={nearbyItem.name}
                className={styles.nearbyItemImage}
              />
              <p className={styles.nearbyItemName}>{nearbyItem.name}</p>
              <p className={styles.nearbyItemPrice}>₹{nearbyItem.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyItems;
