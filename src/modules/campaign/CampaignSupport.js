import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Input from "../../components/input/Input";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white shadow-1 rounded-lg p-7 flex flex-col">
        <h3 className="text-xl text-text3 mb-[30px] text-center">
          Pledge without reward
        </h3>
        <Input
          placeholder="$10"
          control={control}
          name="pedge"
          className="text-lg font-medium px-5 py-2 border border-strock w-full rounded-md mb-5"
        ></Input>
        <div className="p-5 bg-[#f7f7f7] rounded-xl mb-5">
          <h4 className="font-semibold text-sm text-text2 mb-5">
            Back it because you believe in it.
          </h4>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button type="button" kind="secondary">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
