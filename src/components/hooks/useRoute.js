import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../../pages/Error";
import Body from "../../pages/Bodyy";
import Contact from "../../pages/Contact";
import Cart from "../../pages/cart";
import RestroMenu from "../../pages/RestroMenu";
import AppLayout from "../AppLayout";
import Shimmer from "../Shimmer";
import { ShimmerMenu } from "../Shimmer";
import InstaMart from "../Instamart";
import ThankYou from "../../pages/ThankYou";

const About = lazy(() => import("../../pages/About"));

const useRoute = () => {
  const appRoute = createBrowserRouter([
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
          element: (
            <Suspense fallback={<Shimmer />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/shimmer",
          element: <ShimmerMenu />,
        },
        {
          path: "/thankyou",
          element: <ThankYou />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestroMenu />,
        },
        {
          path: "/instamart",
          element: <InstaMart />,
        },
      ],
    },
  ]);
  return appRoute;
};

export default useRoute;
