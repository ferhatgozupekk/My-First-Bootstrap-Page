import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Category, Product, ProductLayout, Products } from "./products";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";
import Fav from "./pages/Fav";

function SiteRoutes({ handleLogin, user }) {
  return (
    <div className="com-sm-12">
      <Routes>
        <Route path="/" element={<Home user={user}></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/products" element={<ProductLayout></ProductLayout>}>
          <Route
            index={true}
            element={<Products user={user}></Products>}
          ></Route>
          <Route
            path="category/:categoryName"
            element={<Category user={user}></Category>}
          ></Route>
          <Route
            path="product/:productId"
            element={<Product user={user}></Product>}
          ></Route>
        </Route>
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin}></Login>}
        ></Route>
        <Route
          path="/fav"
          element={
            <PrivateRoute user={user}>
              <Fav user={user}></Fav>
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default SiteRoutes;
