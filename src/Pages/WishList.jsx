import React from "react";
import { useWishList } from "../Context/WishlistProvider";
import Product from "../Components/Product";
import ProductsBanner from "../Components/ProductsBanner";
import wishlistImg from "../assets/wishlist.png";
import { Link } from "react-router-dom";

function WishList() {
  const { localStorageItem } = useWishList();
  const bannerData = {
    bannerTitle: "Wishlist Products",
    bannerImg:
      "https://img.freepik.com/free-photo/pair-man-woman-wearing-glasses-carried-lots-paper-bags-shopping_1150-27740.jpg?w=996&t=st=1707753622~exp=1707754222~hmac=9fbfbcdbf3b187a45ee60e4a488588622a0ea73e0cdb977a56d8566094f765b5",
  };

  return (
    <>
      <ProductsBanner {...bannerData} />
      {localStorageItem.length === 0 ? (
        <div className="loaderGif">
          <img
            style={{ height: "300px" }}
            src={wishlistImg}
            alt="wishlistImg"
          />
          <Link to="/categories/all" className="button">
            Add Products
          </Link>
        </div>
      ) : (
        <div className="container">
          <div className="productsContainer">
            {localStorageItem.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default WishList;
