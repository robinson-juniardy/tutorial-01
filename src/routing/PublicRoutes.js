import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  const { isAuth } = useContext(UserContext);
  return !isAuth ? <Outlet /> : <Navigate to="main/home" />;
};

export default PublicRoutes;
