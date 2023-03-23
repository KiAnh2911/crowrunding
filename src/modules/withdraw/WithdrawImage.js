import React from "react";

const WithdrawImage = ({
  className = "w-[66px] h-[50px]",
  url = "https://images.unsplash.com/photo-1578359968130-76b59bb5af13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
}) => {
  return (
    <div className={className}>
      <img src={url} alt="" className="w-full h-full object-cover rounded-md" />
    </div>
  );
};

export default WithdrawImage;
