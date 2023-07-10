import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
