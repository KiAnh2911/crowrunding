import React from "react";

const CheckBox = (props) => {
  const { checked = false, onClick = () => {}, name = "", children } = props;
  return (
    <div className="flex items-start mb-5 gap-x-3">
      <div
        className={`inline-flex items-center justify-center text-white p-1 w-5 h-5 border rounded cursor-pointer ${
          checked
            ? "bg-primary border-primary"
            : "border-text4 dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden "
          onChange={() => {}}
          name={name}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label onClick={onClick} className="cursor-pointer">
          {children}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
