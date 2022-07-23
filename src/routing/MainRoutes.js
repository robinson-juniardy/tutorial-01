import { useRoutes, Navigate } from "react-router-dom";
// import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function MainRoutes() {
  return useRoutes([
    {
      path: "/main",
      element: <PrivateRoutes />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ]);
}
