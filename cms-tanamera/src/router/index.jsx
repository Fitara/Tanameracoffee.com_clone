import { createBrowserRouter  } from "react-router-dom";
import Registration from "../components/Registration";
import Categories from '../components/Categories'
import Products from "../components/Products";
import Layout from "../components/Layout";
import Login from '../pages/Login'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
        ],
    },  
]);

export default router 