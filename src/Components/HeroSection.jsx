import React from "react";
import electronics from "../assets/electronics.jpg";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import jewellery from "../assets/jewellery.jpg";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className={`${styles.heroContainer}`}>
      <div className={`${styles.heroImage}`}>
        <img src={women} alt="women" />
        <h1 className={`${styles.heroTitle}`}>Women's Clothing</h1>
        <div className={`${styles.heroImgContent}`}>
          <Link to="/categories/women" className="button">
            Shop For Women
          </Link>
        </div>
      </div>

      <div className={`${styles.heroImage}`}>
        <img src={men} alt="men" />
        <h1 className={`${styles.heroTitle}`}>Men's Clothing</h1>
        <div className={`${styles.heroImgContent}`}>
          <Link to="/categories/men" className="button">
            Shop For Men
          </Link>
        </div>
      </div>

      <div className={`${styles.heroImage}`}>
        <img src={electronics} alt="electronics" />
        <h1 className={`${styles.heroTitle}`}>Electronics</h1>
        <div className={`${styles.heroImgContent}`}>
          <Link to="/categories/electronics" className="button">
            Shop Electronics
          </Link>
        </div>
      </div>

      <div className={`${styles.heroImage}`}>
        <img src={jewellery} alt="jewellery" />
        <h1 className={`${styles.heroTitle}`}>Jewellery</h1>
        <div className={`${styles.heroImgContent}`}>
          <Link to="/categories/jewelery" className="button">
            Shop Jewellery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
