import React from "react";

const WithdrawCampaignTitle = ({
  size = "text-xs",
  className = "text-text3 ",
  title = "One Special 4K Camera",
  date = "Date: 25 Oct 2021",
}) => {
  return (
    <div className={`${size}`}>
      <h2 className="font-medium text-text1">{title}</h2>
      <span className={className}>{date}</span>
    </div>
  );
};

export default WithdrawCampaignTitle;
