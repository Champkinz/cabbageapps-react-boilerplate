import "animate.css/animate.css";
import { Radio } from "antd";
import React from "react";
import { connect } from "react-redux";
import { setLanguage } from "../../../store/modules/preferences/preferences.dispatchers";
import { iStore } from "../../../store/store.model";
import { AccountOpeningByBranchAndChannel } from "./AccountOpeningByBranchAndChannel";
import { AccountOpeningByChannel } from "./AccountOpeningByChannel";
import { AccountOpeningPerBranch } from "./AccountOpeningPerBranch";
import "./dashboard.page.style.scss";
import { DashboardWorkflow } from "./DashboardWorkflow";
import { PendingTasks } from "./PendingTasks";
import { RelationshipOfficer } from "./RelationshipOfficer";

const mapState = (store: iStore) => ({
  language: store.preferences.language,
});
const mapDispatch = () => ({
  setLanguage,
});

const Dashboard = (
  props: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
) => {
  return (
    <div
      className="w-full pl-2 pt-2"
      style={{ height: "85%", position: "relative" }}
    >
      <div className="flex">
        <p className="mr-6">System mode:</p>
        <div>
          <Radio>Beginer2</Radio>
          <Radio>Moderates</Radio>
          <Radio>Expert</Radio>
        </div>
      </div>
      <div className="mt-4">
        <PendingTasks />
        <div className="grid" style={{ gridTemplateColumns: "60% 40%" }}>
          <AccountOpeningPerBranch />
          <RelationshipOfficer />
        </div>
        <AccountOpeningByChannel />
        <AccountOpeningByBranchAndChannel />
        <DashboardWorkflow />
      </div>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Dashboard);
