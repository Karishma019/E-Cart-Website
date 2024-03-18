import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Products from "./Components/Products";
import ProductDetail from "./Pages/ProductDetail";
import WishList from "./Pages/WishList";

import { loader as fetchProducts } from "./Components/Products";
import { loader as fetchProductDetails } from "./Pages/ProductDetail";
import RootLayout from "./Layout/RootLayout";
import Categories from "./Pages/Categories";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={fetchProducts} />
        <Route
          path="/categories/all"
          element={<Categories />}
          loader={fetchProducts}
        />
        <Route
          path="/categories/men"
          element={<Products category="men's clothing" />}
          loader={fetchProducts}
        />
        <Route
          path="/categories/women"
          element={<Products category="women's clothing" />}
          loader={fetchProducts}
        />
        <Route
          path="/categories/jewelleries"
          element={<Products category="jewelery" />}
          loader={fetchProducts}
        />
        <Route
          path="/categories/electronics"
          element={<Products category="electronics" />}
          loader={fetchProducts}
        />
        <Route
          path="/categories/:categoryName/:id"
          element={<ProductDetail />}
          loader={fetchProductDetails}
        />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        autoClose={600}
        hideProgressBar={true}
        theme="dark"
      />
    </>
  );
}

export default App;
