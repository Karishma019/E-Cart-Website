import HeroSection from "../Components/HeroSection";
import { useLoaderData } from "react-router-dom";
import BestSellingProducts from "../Components/BestSellingProducts";
import ShopBanner from "../Components/ShopBanner";
import men from "../assets/men.jpg";
import electronics from "../assets/electronics.jpg";
import TrendingProducts from "../Components/TrendingProducts";

function Home() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <>
      <div className="container">
        <HeroSection />
        <BestSellingProducts products={products} />
        <ShopBanner img={men} />
        <TrendingProducts products={products} />
        <ShopBanner img={electronics} reverse={true} />
      </div>
    </>
  );
}

export default Home;
