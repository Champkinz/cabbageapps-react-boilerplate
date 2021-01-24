import React from "react";
import { DashboardHeader } from "../../atoms/DashboardHeader";
import flow from "./img/flow.png";

export const DashboardWorkflow = () => {
  return (
    <div className="bg-white p-4 rounded-md mt-4 w-1/2">
      <DashboardHeader title="Workflow" tag="Workflow of Systems" />
      <div className="flex justify-center align-middle mt-4">
        <img src={flow} alt="pic" className="p-4" />
      </div>
    </div>
  );
};
