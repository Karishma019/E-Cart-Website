import { Link } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import styles from "./CartItem.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { BsXCircleFill } from "react-icons/bs";

function CartItem({ title, image, price, id, quantity, category }) {
  const { increaseQty, decreaseQty, removeCartItem } = useCart();
  return (
    <div className={`${styles.cartItemContainer}`}>
      <div className={`${styles.cartImgAndTitle}`}>
        <img src={image} alt={title} className={`${styles.cartImage}`} />
        <Link
          className={`${styles.cartTitle}`}
          to={`/categories/${category}/${id}`}
        >
          {title}
        </Link>
      </div>

      <div className={`${styles.cartPriceAndBtn}`}>
        <button
          onClick={() => {
            if (quantity > 1) {
              decreaseQty(id);
            }
          }}
          className={`${styles.cartIconBtn}`}
        >
          <FaMinusCircle />
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => increaseQty(id)}
          className={`${styles.cartIconBtn}`}
        >
          <FaPlusCircle />
        </button>
        <p className={`${styles.price}`}>${price * quantity}</p>
        <button
          onClick={() => {
            removeCartItem(id);
          }}
          className={`${styles.cartIconBtn}`}
        >
          <BsXCircleFill fill="red" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
