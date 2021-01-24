import { Steps } from "antd";
import React from "react";

export const StepsComponent = () => {
  return (
    <div className=" p-4 shadow rounded bg-white min-h-full max-w-full overflow-auto">
      <Steps size="small" direction="vertical" current={0}>
        <Steps.Step title="Customer Details" description="Add a Customer" />
        <Steps.Step title="Product Details" description="Choose a Product" />
        <Steps.Step
          title="Account Details"
          description="Add in account details"
        />
        <Steps.Step
          title="Statement Details"
          description="Add in statement details"
        />
        <Steps.Step
          title="Interest Details"
          description="Add in interest details"
        />
        <Steps.Step
          title="Overdraft Details"
          description="Add in overdraft details"
        />
        <Steps.Step title="Preferences" description="Add in preferences" />
        <Steps.Step title="Card Information" description="Add in card info" />
        <Steps.Step title="Other" description="Add other details" />
      </Steps>
    </div>
  );
};
