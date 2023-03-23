import React from "react";

const CampImage = ({
  url = "https://images.unsplash.com/photo-1678774267521-af5ea575d910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  name = "",
  className = "h-[158px]",
}) => {
  return (
    <div className={className}>
      <img
        src={url}
        alt={name}
        className="object-cover w-full h-full rounded-2xl"
      />
    </div>
  );
};

export default CampImage;
