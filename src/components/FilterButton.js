import React from "react";
import styles from "../styles/CategoryPage.module.css";

const FilterButton = ({ onClick }) => {
  return (
    <button className={styles.filterButton} onClick={onClick}>
      Filter Items
    </button>
  );
};

export default FilterButton;
