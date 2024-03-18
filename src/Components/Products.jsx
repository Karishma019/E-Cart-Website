import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import ProductsBanner from "./ProductsBanner";
import ProductsPageContent from "./ProductsPageContent";

export async function loader() {
  try {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    return { products: response.data, error: null, isError: false };
  } catch (error) {
    const errorMsg = error.message;
    return { products: null, error: errorMsg, isError: true };
  }
}

function Products({ category }) {
  const { products, error, isError } = useLoaderData();
  const bannersData = {
    bannerTitle: category ? category : "Check our products",
    bannerImg:
      category === "men's clothing"
        ? "https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?w=996&t=st=1707748804~exp=1707749404~hmac=1b27d771625e42c2e4668185780a20c5ce5c18bf14d1a64204a6f4f752cfde56"
        : category === "women's clothing"
        ? "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=996&t=st=1707749744~exp=1707750344~hmac=20ceb1984d3fd2c9a3f0be5be8e3974732fa5c8eecb76e9e4b4e9c90e4e866e2"
        : category === "jewelery"
        ? "https://img.freepik.com/free-photo/gleaming-ring-silk-with-shimmering-bokeh-lights_157027-3963.jpg?t=st=1707752763~exp=1707756363~hmac=129760f8c1076a16cc8de67ba3af25259871478003683129283d12ed1851e7d8&w=1380"
        : category === "electronics"
        ? "https://img.freepik.com/free-photo/modern-man-tech-collection-wooden-desk-headphones-sunglasses-smartphone-generated-by-ai_24640-92923.jpg?t=st=1707750923~exp=1707754523~hmac=94cbbcb397dcfb3d8097e15b48c91d48c02a6e56ad8710336f0795558a0e2b02&w=1060"
        : "https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?w=900&t=st=1707753134~exp=1707753734~hmac=54965a8ee814723be8178a655a281459c43443456670334b42b82befb999cdb0",
  };

  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <ProductsBanner
        bannerTitle={bannersData.bannerTitle}
        bannerImg={bannersData.bannerImg}
      />
      <ProductsPageContent />
      <div className="container">
        <div className="productsContainer">
          {products &&
            products.map((product) => {
              if (category) {
                if (product.category === category) {
                  return <Product key={product.id} {...product} />;
                }
              } else {
                return <Product key={product.id} {...product} />;
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Products;
