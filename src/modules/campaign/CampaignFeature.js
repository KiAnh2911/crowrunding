import React from "react";
import CamCategory from "./parts/CamCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-[30px] w-full max-w-[1048px]">
      <CampImage className="h-[266px] flex-1"></CampImage>
      <div className="max-w-[435px] flex-1">
        <CamCategory className="mb-4 text-sm" text="Architecture"></CamCategory>
        <CampTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-5 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full h-1 rounded-full bg-[#EFEFEF] mb-5">
          <div className="w-2/3 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex gap-x-16 ">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big" number="173" text="Total backers"></CampMeta>
          <CampMeta size="big" number="30" text="Days left"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
