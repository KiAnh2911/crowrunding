import React from "react";
import { Button } from "../../components/button";
import CampTitle from "./parts/CampTitle";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div className="">
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src="https://source.unsplash.com/random"
          alt="image_pedge"
          className="h-[232px] w-full object-cover rounded-xl"
        />
        <div className="p-5">
          <span className="inline-block text-xs text-white bg-secondary font-medium py-1 px-3 mb-5 rounded-sm">
            Feature
          </span>
          <CampTitle className="text-text1 text-xl font-semibold mb-1">
            Special One Camera
          </CampTitle>
          <div className="flex items-center gap-x-3 mb-4">
            <span className="text-text1 text-xl font-bold">$2,724 USD</span>
            <span className="text-sm text-error font-medium line-through">
              $1,504 USD
            </span>
            <span className="text-sm text-error font-medium">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-4">
            <strong className="text-text1 text-base">Estimated Shipping</strong>
            <span className="text-sm text-text2">October 2022</span>
          </div>
          <div className="flex gap-x-1 text-sm font-medium mb-4">
            <strong className="text-text1 ">05</strong>
            <span className="text-text2">claimed</span>
          </div>
          <span className="text-text2 text-sm">Ships worldwide</span>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button type="button" kind="secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
