import { Link } from "react-router-dom";
import styles from "./ShopBanner.module.css";

function ShopBanner({ img, reverse }) {
  return (
    <div
      className={`${reverse ? styles.shopContainerRev : styles.shopContainer}`}
    >
      <div className={`${styles.bannerContent}`}>
        <h2>Discover the Latest</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Corrupti, voluptates.
        </p>
        <Link to="/categories/all" className="button">
          Shop Now
        </Link>
      </div>
      <div className={`${styles.bannerImg}`}>
        <img src={img} alt="Banner-Image" />
      </div>
    </div>
  );
}

export default ShopBanner;
