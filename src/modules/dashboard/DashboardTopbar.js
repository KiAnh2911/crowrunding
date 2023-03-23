import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-14 flex-1">
        <Link to={"/"} className="inline-block">
          <img src="/logo.png" alt="logo-crowfunding" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFund></DashboardFund>
        <Button
          href="/start-campaign"
          type="button"
          className="px-7"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img src="/logo.png" alt="logo-crowfunding" className="rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopbar;
