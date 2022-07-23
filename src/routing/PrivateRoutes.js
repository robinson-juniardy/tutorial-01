import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoutes = () => {
  const { isAuth } = useContext(UserContext);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
