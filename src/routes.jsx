import App from "./App";
import HomePage from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/Error";

const routes = [
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "cart",
                element: <ShoppingCart />,
            },
        ],
    },
];

export default routes;
