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
// import Error_NotFoundLayout from "../Layouts/Error&NotFoundLayout";
import AuthLayout from "../Layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage";
import PageNotFoundLayout from "../Layouts/PageNotFoundLayout";
import ProfilePage from "../Pages/ProfilePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage issue={true}/>,
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
        errorElement: <ErrorPage issue={false}/>,
        element: (
          <PrivateRoute>
            <ToysDetailsPage />
          </PrivateRoute>
        ),
        loader: () => axios.get("/data.json"),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <ProfilePage/>
          </PrivateRoute>
        )
      }
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
    Component:PageNotFoundLayout,
  }
]);
