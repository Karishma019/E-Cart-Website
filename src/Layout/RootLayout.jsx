import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import loaderGif from "../assets/loader.gif";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {navigation.state === "idle" ? (
        <Outlet />
      ) : (
        <div className="loaderGif">
          <img src={loaderGif} alt="loading" />
        </div>
      )}
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default RootLayout;
