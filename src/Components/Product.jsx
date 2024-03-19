import { Link } from "react-router-dom";
import { useWishList } from "../Context/WishlistProvider";
import styles from "./Product.module.css";
import { IoHeart } from "react-icons/io5";
import { toast } from "react-toastify";

// import { GoHeart } from "react-icons/go";

function Product({ title, image, price, category, id }) {
  const { addItemToWishList, removeWishListItem, wishList } = useWishList();

  const isProductInWishlist = (wishList, id) => {
    return wishList.some((item) => item.id === id);
  };

  const isItemInWishlist = isProductInWishlist(wishList, id);

  const handleToggle = () => {
    for (let item of wishList) {
      if (item.id === id) {
        removeWishListItem(id);
        toast.error("Item Removed");
        return;
      }
    }

    const newWishListItem = {
      title: title,
      image: image,
      price: price,
      category: category,
      id: id,
    };

    addItemToWishList(newWishListItem);
    toast.info("Item is Added");
  };

  return (
    <>
      <div className={`${styles.product}`}>
        <Link
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to={`/categories/${category}/${id}`}
        >
          <div>
            <img src={image} alt={title} className={`${styles.productImg}`} />
            <p className={`${styles.productCategory}`}>{category}</p>
            <p className={`${styles.productTitle}`}>{title}</p>
            <p className={`${styles.productPrice}`}>${price}</p>
          </div>
        </Link>
        <button onClick={handleToggle} className={`${styles.favBtn}`}>
          <IoHeart
            fill={isItemInWishlist ? "red" : "grey"}
            className={`${styles.favIcon}`}
          />
        </button>
      </div>
    </>
  );
}

export default Product;
