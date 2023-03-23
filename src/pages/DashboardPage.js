import React, { Fragment } from "react";
import Gap from "../components/common/Gap";
import Heading from "../components/common/Heading";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
