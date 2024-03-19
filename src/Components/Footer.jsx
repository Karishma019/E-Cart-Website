import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={`${styles.footerContents}`}>
          <h1 className={`${styles.logo}`}>
            <Link to="/">E-Cart</Link>
          </h1>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
          <ul className={`${styles.icons}`}>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
        <div className={`${styles.footerContents}`}>
          <p className={`${styles.titles}`}>Information</p>
          <ul className={`${styles.lists}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/categories/all"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/wishlist"
              >
                WishList
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/cart"
              >
                View Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerContents}`}>
          <p className={`${styles.titles}`}>Discover</p>
          <ul className={`${styles.lists}`}>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/"
              >
                Men's Clothing
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/categories/all"
              >
                Women's Clothing
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/wishlist"
              >
                Jewelleries
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                to="/cart"
              >
                Electronics
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerContents}`}>
          <p className={`${styles.titles}`}>Locate Us</p>
          <ul className={`${styles.lists}`}>
            <li>123 Demo Blvd, Miami, FL 4567, United States</li>
            <li>+1 123-456-7890</li>
            <li>support@ecart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={`${styles.footerEnd}`}>
        © 2024 E-cart. All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
