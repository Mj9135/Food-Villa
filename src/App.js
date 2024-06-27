import ReactDom from "react-dom/client";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header.js";
import Body from "./components/Bodyy.js";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu/RestroMenu";
import Shimmer from "./components/Shimmer.js";
import { ShimmerMenu } from "./components/Shimmer.js";
const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shim",
        element: <ShimmerMenu />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestroMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
