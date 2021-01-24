import { Collapse } from "antd";
import React from "react";
import { DashboardHeader } from "../../atoms/DashboardHeader";
import { CollapseText } from "./CollapseText";

export const PendingTasks = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <DashboardHeader
        className="mb-4"
        title="Pending Tasks"
        tag="Your Task is Pending"
      />
      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel
          collapsible="header"
          header="Account - Account Opening"
          key="1"
        >
          <CollapseText title="Task Description"></CollapseText>
          <CollapseText title="Task Description"></CollapseText>
        </Collapse.Panel>
        <Collapse.Panel
          collapsible="header"
          header="Cheque - pending Requests"
          key="2"
        >
          <CollapseText title="Task Description"></CollapseText>
        </Collapse.Panel>
      </Collapse>

      {/* <Card title="Account - Account Opening">
        <List>
          <List.Item>
            <CollapseText title="Task Description"></CollapseText>
          </List.Item>
          <List.Item>
            <CollapseText title="Task Description"></CollapseText>
          </List.Item>
        </List>
      </Card> */}
    </div>
  );
};
