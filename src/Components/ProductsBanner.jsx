import React from "react";
import styles from "./ProductsBanner.module.css";

function ProductsBanner({ bannerTitle, bannerImg }) {
  return (
    <>
      <div className={styles.productsBanner}>
        <img src={bannerImg} className={styles.productsImg} />
        <div className={styles.bannerContent}>
          <h1>{bannerTitle}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            sapiente accusantium eos
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductsBanner;
