import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useCart } from "../Context/CartProvider";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TrendingProducts from "../Components/TrendingProducts";

export async function loader({ params }) {
  const productId = params.id;
  // console.log(productId);
  const productDetailEndPoint = `https://fakestoreapi.com/products/${productId}`;
  try {
    const response = await axios.get(productDetailEndPoint);
    return { productData: response.data, error: null, isError: false };
  } catch (error) {
    const errMsg = error.message;
    return { productData: null, error: errMsg, isError: true };
  }
}

function ProductDetail() {
  const { productData, error, isError } = useLoaderData();
  if (isError) {
    return <h1>{error}</h1>;
  }

  const { cart, addToCart } = useCart();

  const handleAdd = () => {
    for (let item of cart) {
      if (item.id === productData.id) {
        toast.error("Already Added To Cart");
        return;
      }
    }
    const newCartItem = {
      title: productData.title,
      image: productData.image,
      price: productData.price,
      id: productData.id,
      category: productData.category,
      quantity: 1,
    };
    addToCart(newCartItem);
    toast.info("Added To Cart");
  };

  console.log(productData);
  return (
    <>
      <div className={`${styles.productDetail}`}>
        <div className={`${styles.productContainer} container`}>
          {productData && (
            <>
              <div className={`${styles.ProductDetailImg}`}>
                <img src={productData.image} alt={productData.title} />
              </div>
              <div className={`${styles.productDetailContent}`}>
                <p className={`${styles.detailCategory}`}>
                  <span>
                    <Link to="/">Home</Link>
                  </span>{" "}
                  / {productData.category}
                </p>
                <h1 className={`${styles.detailTitle}`}>{productData.title}</h1>
                <p className={`${styles.detailPrice}`}>${productData.price}</p>

                <p className={`${styles.detailDescription}`}>
                  <span>Description : </span>
                  {productData.description}
                </p>
                <button className="button" onClick={handleAdd}>
                  Add To cart
                </button>
                <hr />
                <p className={`${styles.detailCategory}`}>
                  Category : {productData.category}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="container">
          <TrendingProducts />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
