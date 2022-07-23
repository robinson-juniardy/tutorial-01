import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const MainLayout = () => {
  const { setIsAuth } = useContext(UserContext);
  return (
    <div>
      <h3>Main Layout</h3>
      <hr />
      <Outlet /> <hr />
      <button
        onClick={() => {
          localStorage.clear();
          setIsAuth(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default MainLayout;
