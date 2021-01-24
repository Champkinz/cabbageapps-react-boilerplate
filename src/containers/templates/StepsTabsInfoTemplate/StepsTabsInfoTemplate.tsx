import React, { ReactNode } from "react";

interface StepsTabsInfoProps {
  Steps: ReactNode;
  Tabs: ReactNode;
  Info: ReactNode;
}

const StepsTabsInfoTemplate: React.FC<StepsTabsInfoProps> = ({
  Steps,
  Tabs,
  Info
}) => {
  return (
    <div className=" flex h-full">
      <div className=" w-1/6 p-4 mr-2 bg-white">{Steps}</div>
      <div className=" w-4/6 bg-white">{Tabs}</div>
      <div className=" w-1/6 bg-white">{Info}</div>
    </div>
  );
};

export default StepsTabsInfoTemplate;
