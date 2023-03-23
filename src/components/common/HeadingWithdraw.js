import React from "react";
import { Link } from "react-router-dom";

const HeadingWithdraw = ({ children, className = "", onClick = () => {} }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className={`text-xl font-bold text-text1 ${className}`}>
        {children}
      </h2>
      <Link to={"/"} className="text-base font-semibold text-secondary">
        View All
      </Link>
    </div>
  );
};

export default HeadingWithdraw;
