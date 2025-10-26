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

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
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
      {
        path: "/toys-details/:toysId",
        element: (
          <PrivateRoute>
            <ToysDetailsPage />
          </PrivateRoute>
        ),
        loader: () => axios.get("/data.json"),
        HydrateFallback: Spinner,
      },
    ],
  },
]);
