import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "./AuthLayout";
import ToysDetailsLayout from "./ToysDetailsLayout";

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    },
    {
        path: '/auth',
        Component: AuthLayout
    },
    {
        path: '/toys-details/:id',
        Component: ToysDetailsLayout
    }

])