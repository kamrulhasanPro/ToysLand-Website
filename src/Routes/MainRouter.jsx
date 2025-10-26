import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import HomePage from "../Pages/HomePage";
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ToysDetailsPage from "../Pages/ToysDetailsPage";
import axios from "axios";
import Spinner from "../Components/Spinner";
import PrivateRoute from "./PrivateRoute";
import ForgetPage from "../Pages/ForgetPage";
import PageNotFoundLayout from "../Layouts/PageNotFoundLayout";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    hydrateFallbackElement: <Spinner className={'w-screen h-screen flex items-center justify-center'}/>,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => axios.get("/data.json"),
      },
      {
        path: "/category/:id",
        Component: Categories,
        loader: () => axios.get("/data.json"),
      },
      {
        path: "/toys-details/:toysId",
        element: (
          <PrivateRoute>
            <ToysDetailsPage />
          </PrivateRoute>
        ),
        loader: () => axios.get("/data.json"),
        ErrorBoundary: ErrorPage
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/login/forget',
        Component: ForgetPage
      },
      {
        path: "/register",
        Component: Register,
      },
    ]
  },
  {
    path: '*',
    Component: PageNotFoundLayout
  }
]);
