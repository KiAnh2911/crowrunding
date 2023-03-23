import React from "react";

const WithdrawAmount = ({
  children = "$ 5,850",
  className = "text-xs font-bold text-text1",
}) => {
  return <span className={className}>{children}</span>;
};

export default WithdrawAmount;
