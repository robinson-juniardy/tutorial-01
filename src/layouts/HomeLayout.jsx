import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <div>
      <h3>Home layout</h3>
      <hr />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
