import React from "react";
import ItemCard from "./ItemCard";
import CategoryCard from "./CategoryCard";
import styles from "../styles/HomePage.module.css";
import image from "../images/electronics.jpeg";

// Dummy data for items
const items = [
    {
      id: 1,
      name: "Canon EOS 1500D Camera",
      category: "Electronics",
      image,
      location: "New York",
      hot: true,
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch",
      category: "Electronics",
      image,
      location: "San Francisco",
      hot: false,
    },
    {
      id: 3,
      name: "Camping Tent",
      category: "Outdoors",
      image,
      location: "Seattle",
      hot: true,
    },
    // More items...
  ];
  
  // Dummy data for categories
  const categories = [
    { id: "electronics", name: "Electronics", image },
    { id: "furniture", name: "Furniture", image },
    { id: "outdoor", name: "Outdoors", image },

    // More categories...
  ];
  

const HomePage = () => {
  // Filter for "Hot" items
  const hotItems = items.filter((item) => item.hot);

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Rewill</h1>
        <p className={styles.heroSubtitle}>
          Rent, Return, and Repeat with ease.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Most Popular Items</h2>
        <div className={styles.itemGrid}>
          {items.map((item) => (
            <ItemCard key={item.id} item={item}/>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Hot Items Nearby Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hot Items Near You</h2>
        <div className={styles.itemGrid}>
          {hotItems.map((item) => (
            <ItemCard key={item.id} item={item}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
