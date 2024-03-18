import React from "react";
import Products from "../Components/Products";
import TrendingProducts from "../Components/TrendingProducts";

function Categories() {
  return (
    <>
      <Products />
      <div className="container">
        <TrendingProducts />
      </div>
    </>
  );
}

export default Categories;
