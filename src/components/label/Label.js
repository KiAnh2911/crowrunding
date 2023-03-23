import React from "react";
import PropTypes from "prop-types";
const Label = (props) => {
  const { htmlFor = "", children = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium text-text2 dark:text-text3 cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
