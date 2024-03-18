import React, { useEffect, useState } from "react";
import Product from "./Product";
import styles from "./TrendingProducts.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

function TrendingProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const leftBtn = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
    console.log(slider.scrollLeft);
  };

  const rightBtn = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log(slider.scrollLeft);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://fakestoreapi.com/products?limit=10";
        const response = await axios.get(url);
        setProducts(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className={`${styles.container}`}>
        <h2>Trending Products</h2>
        <div className={`${styles.slidesContainer}`} id="slider">
          {products &&
            products.map((product) => {
              return <Product {...product} key={product.id} />;
            })}
        </div>
        <div className={`${styles.btn}`}>
          <button className="button" onClick={leftBtn}>
            <FaArrowLeft />
          </button>
          <button className="button" onClick={rightBtn}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default TrendingProducts;
