import { createBrowserRouter as Router, RouterProvider, Route } from "react-router-dom";
import Products from "../pages/Products";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/product/:slugProduct",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;