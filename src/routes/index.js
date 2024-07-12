import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/login";
import Register from "../components/auth/register";
import ForgotPassword from "../components/auth/forgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registration',
        element: <Register />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    }
]);

export default router;