import React from "react";

const CampMeta = ({
  number = "$2,000",
  text = "Raised of $1,900 ",
  size = "small",
}) => {
  return (
    <div className="flex flex-col">
      <h2
        className={`mb-1 font-semibold text-text2 ${(size = "small"
          ? "text-sm"
          : "text-xl")}`}
      >
        {number}
      </h2>
      <span
        className={`text-text4 ${(size = "small" ? "text-xs" : "text-base")}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
