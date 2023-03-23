import React, { Fragment } from "react";
import { Button } from "../../components/button";
import Heading from "../../components/common/Heading";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CamCategory from "./parts/CamCategory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CamViewAuthor from "./parts/CamViewAuthor";
import CampaignItem from "./CampaignItem";
import CampaignGrid from "./CampaignGrid";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] rounded-xl mb-10 relative">
        <div className="gradient-overlay"></div>
        <img
          src="/banner.png"
          alt="banner"
          className="rounded-xl w-full h-full object-cover"
        />
        <h1 className="text-white text-[40px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tran z-10">
          Education
        </h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-[89px] h-[70px] rounded-md object-cover"
                />
              ))}
          </div>
        </div>
        <div className="max-w-[443px] flex-1">
          <CamCategory className="mb-4 text-sm" text="Film"></CamCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Meet - AI Virtual Background 4K Webcam
          </CampTitle>

          <CampDesc className="mb-5 text-sm">
            The first-ever 4K webcam that embeded AI technology to protect your
            background during video calls.
          </CampDesc>
          <CamViewAuthor></CamViewAuthor>
          <div className="w-full h-1 rounded-full bg-[#EFEFEF] mb-5">
            <div className="w-2/3 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex gap-x-16 mb-4 ">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big" number="173" text="Total backers"></CampMeta>
            <CampMeta size="big" number="30" text="Days left"></CampMeta>
          </div>
          <Button type="button" kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] p-5 shadow-sm mb-8">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button type="button" kind="primary" className="px-[35px]">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="text-lh font-semibold mb-5 uppercase">Story</h2>
          <div className="bg-white w-full"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <Heading className="mb-10">You also may be interested in</Heading>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
