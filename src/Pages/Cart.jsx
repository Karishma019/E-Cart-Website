import React from "react";
import { useCart } from "../Context/CartProvider";
import CartItem from "../Components/CartItem";
import ProductsBanner from "../Components/ProductsBanner";
import cartImg from "../assets/shoppingCart.png";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(totalAmount);
  const bannerData = {
    bannerImg:
      "https://img.freepik.com/free-photo/happy-couple-lying-shopping-cart-hand-holding-shopping-bag-rushing-shop-store_74952-2503.jpg?t=st=1709034718~exp=1709038318~hmac=f86ae8b9e0a19ca68be848ab207b5723da204fedc118ba15798b898d9c9ae430&w=1060",
    bannerTitle: "Your Cart",
  };
  return (
    <div>
      <ProductsBanner {...bannerData} />
      <div className="container">
        {cart.length === 0 ? (
          <div className="loaderGif">
            <img style={{ height: "350px" }} src={cartImg} alt="wishlistImg" />
            <Link to="/categories/all" className="button">
              Add Products
            </Link>
          </div>
        ) : (
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
            <h1 className="cartTotal">
              Total Amount : ${Math.round(totalAmount)}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
