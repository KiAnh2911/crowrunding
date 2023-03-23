import React from "react";

const DashboardSearch = () => {
  return (
    <div className="flex items-center rounded-[100px] shadow-sdprimary py-[6px] px-1 bg-white">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full px-6 text-sm bg-transparent placeholder:text-text4 text-text1"
          required
        />
      </div>
      <button className="w-[72px] h-10 flex items-center justify-center py-3 bg-primary px-7 rounded-[28px] cursor-pointer text-white flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-[18px] h-[18px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;
