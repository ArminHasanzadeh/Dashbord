import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function DashboardLayout(props) {
  return (
    <main className=" relative flex-col w-full h-full">
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      <div className="w-[85%] h-auto absolute top-22 right-0 max-sm:w-full max-lg:w-full">
        <Outlet />
      </div>
    </main>
  );
}

export default DashboardLayout;
