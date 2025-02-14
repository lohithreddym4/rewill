import React, { useState } from "react";
import styles from "../styles/CustomSlider.module.css";
import Image from "next/image";

const CustomSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={prevSlide}>
        &#8249;
      </button>
      <div className={styles.slide}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.sliderImage}
          width={400}
          height={300}
        />
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        &#8250;
      </button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
