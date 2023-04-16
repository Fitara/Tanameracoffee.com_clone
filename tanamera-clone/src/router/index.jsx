import { createBrowserRouter  } from "react-router-dom";
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
        ],
    },
]);

export default router 