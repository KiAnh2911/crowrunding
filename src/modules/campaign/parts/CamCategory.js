import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CamCategory = ({ text = "Education", className = "mb-4 text-xs" }) => {
  return (
    <Link
      to={"/"}
      className={`flex items-baseline font-medium gap-x-3 text-text3 ${className}`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CamCategory;
