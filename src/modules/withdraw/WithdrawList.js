import React from "react";
import WithdrawAmount from "./WithdrawAmount";
import WithdrawBacker from "./WithdrawBacker";
import WithdrawCampaignTitle from "./WithdrawCampaignTitle";
import WithdrawCategory from "./WithdrawCategory";
import WithdrawImage from "./WithdrawImage";

const WithdrawList = () => {
  return (
    <div className="list-grid mb-[30px] px-[30px]">
      <div className="flex gap-x-4 items-center">
        <WithdrawImage url="https://plus.unsplash.com/premium_photo-1667737997256-3c583bab7832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"></WithdrawImage>
        <WithdrawCampaignTitle date="Date: 26 Oct 2021"></WithdrawCampaignTitle>
      </div>
      <WithdrawCategory>Camera Gear</WithdrawCategory>
      <WithdrawAmount></WithdrawAmount>
      <WithdrawBacker url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"></WithdrawBacker>
    </div>
  );
};

export default WithdrawList;
