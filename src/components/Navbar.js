"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import styles from "../styles/Navbar.module.css";

// Mock items data
const items = [
  {
    id: 1,
    name: "Canon EOS 1500D Camera",
    category: "Electronics",
    image: "/images/camera.jpg",
    price: "$25/day",
    location: "New York",
    availability: "Available",
  },
  {
    id: 2,
    name: "MacBook Pro 16-inch",
    category: "Electronics",
    image: "/images/macbook.jpg",
    price: "$50/day",
    location: "San Francisco",
    availability: "Unavailable",
  },
  {
    id: 3,
    name: "Camping Tent",
    category: "Outdoors",
    image: "/images/tent.jpg",
    price: "$10/day",
    location: "Seattle",
    availability: "Available",
  },
];

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Debounced version of searchTerm
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter suggestions when search term changes (debounced)
  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setSuggestions(filteredItems);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Redirect to search page
    window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
  };

  // Load search term from query on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("query");
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Rewill
        </Link>

        {/* Menu Toggle for Mobile */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <div
          className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}
        >
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className={styles.suggestions}>
              {suggestions.map((item) => (
                <li key={item.id} className={styles.suggestionItem}>
                  <Link
                    href={`/items/${item.id}`}
                    onClick={() => setSuggestions([])} // Clear suggestions on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}


          <Link href="/account/rentals" className={styles.navLink}>
            My Rentals
          </Link>
          <Link href="/account/profile" className={styles.navLink}>
            Profile
          </Link>
          <Link href="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
