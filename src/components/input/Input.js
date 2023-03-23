import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
const Input = (props) => {
  const {
    type = "text",
    control,
    children,
    name,
    placeholder = "",
    error = "",

    ...rest
  } = props;
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full py-4 px-6 border rounded-xl bg-transparent text-sm   font-medium placeholder:text-text4 dark:placeholder:text-text2 ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:text-white dark:border-darkStroke "
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length > 0 ? "" : placeholder}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute pointer-events-none text-error top-2/4 left-6 -translate-y-2/4 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute transition-all cursor-pointer select-none top-2/4 right-6 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
