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

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;

// or create a js file with route.js and write const HOME_ROUTE= "/" and const ABOUT_ROUTE="/about" then export multiple with export{HOME_ROUTE,ABOUT_ROUTE}
// then  to use js variable use {}            <Route path={ABOUT_ROUTE} element={<About />} />
