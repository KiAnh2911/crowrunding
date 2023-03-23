import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = (props) => {
  const {
    children,
    type = "button",
    className = "",
    isLoading = false,
    ...rest
  } = props;
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaultBtnClassName =
    "flex items-center justify-center text-base font-semibold p-4 rounded-xl min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultBtnClassName += defaultBtnClassName + " bg-primary text-white";
      break;
    case "secondary":
      defaultBtnClassName += defaultBtnClassName + " bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnClassName +=
        defaultBtnClassName + " bg-secondary bg-opacity-20 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultBtnClassName} ${className} `}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      className={`${defaultBtnClassName} ${
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
