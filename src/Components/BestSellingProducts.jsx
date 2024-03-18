import Product from "../Components/Product";
import styles from "./BestSellingProducts.module.css";

function BestSellingProducts({ products }) {
  return (
    <>
      <div className={`${styles.container}`}>
        <h2>Best Selling Products</h2>
        <div className="productsContainer">
          {products &&
            products.map((product) => {
              if (product.rating.rate > 4.1) {
                return <Product key={product.id} {...product} />;
              }
            })}
        </div>
      </div>
    </>
  );
}

export default BestSellingProducts;
