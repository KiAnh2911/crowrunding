import React from "react";
import CamCategory from "./parts/CamCategory";
import CampAuthor from "./parts/CampAuthor";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CamCategory>Education</CamCategory>
        <CampTitle> Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-center justify-between mb-5">
          <CampMeta></CampMeta>
          <CampMeta text="Total backers" number="173"></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
