import React from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="flex gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
