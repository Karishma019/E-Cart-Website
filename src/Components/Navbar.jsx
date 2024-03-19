import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { GrFavorite } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={` ${styles.container} container`}>
          <div className={`${styles.logo}`}>
            <Link to="/">
              <h1>E-Cart</h1>
            </Link>
          </div>
          <div
            className={`${styles.navBarIcon}`}
            onClick={() => {
              if (showNav) {
                setShowNav(false);
              } else {
                setShowNav(true);
              }
            }}
          >
            {showNav ? <IoMdClose /> : <VscThreeBars />}
          </div>

          <div
            className={`${styles.navlinks} ${
              showNav ? styles.navShowLinks : ""
            }`}
          >
            <Link
              onClick={() => {
                setShowNav(false);
              }}
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => {
                window.scrollTo(0, 0);
                setShowNav(false);
              }}
              to="/categories/all"
            >
              Categories
            </Link>

            <Link
              onClick={() => {
                setShowNav(false);
              }}
              to="/wishlist"
            >
              WishList
              <GrFavorite className={`${styles.icons}`} />
            </Link>

            <Link
              onClick={() => {
                setShowNav(false);
              }}
              to="/cart"
            >
              Cart
              <TfiShoppingCartFull className={`${styles.icons}`} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
