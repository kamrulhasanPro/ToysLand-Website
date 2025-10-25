import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import ToysDetailsLayout from "../Layouts/ToysDetailsLayout";
import HomePage from "../Pages/HomePage";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/category/:id',
                Component: Categories
            }
        ]
    },
    {
        path: '',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
    {
        path: '/toys-details/:id',
        Component: ToysDetailsLayout
    }

])