import React, { Fragment } from "react";
import { Button } from "../components/button";

import Heading from "../components/common/Heading";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="mb-10 bg-white rounded-3xl flex justify-between items-center">
        <div className="flex items-start gap-x-6">
          <div className="w-14 h-14 bg-secondary opacity-60 rounded-full flex items-center justify-center cursor-pointer text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h2>
            <p className="text-sm text-text3 mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-primary text-sm">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button
          type="button"
          className="px-8"
          kind="ghost"
          href="/start-campaign"
        >
          Create Campaign
        </Button>
      </div>
      <Heading number="4">Your Campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10"></div>
      <Button type="button" kind="ghost" className="px-10 mx-auto">
        See more+
      </Button>
    </Fragment>
  );
};

export default CampaignPage;
