import { Link, createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ProductCheckout from "../pages/ProductCheckout";
import AuthPage from "../components/utils/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center">
        <h3>
          there are some issue here, please go to{" "}
          <Link to={"/"} className="hover:underline text-blue-500">
            home
          </Link>{" "}
        </h3>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/product-checkout/:id",
        element: <ProductCheckout />,
      },
      {
        path: "/auth/:page",
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
