import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./products/Details";
import MainLayout from "./layouts/MainLayout";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/products">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
