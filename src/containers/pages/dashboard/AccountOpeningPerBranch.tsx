import { Table } from "antd";
import React from "react";
import { DashboardHeader } from "../../atoms/DashboardHeader";

export const AccountOpeningPerBranch = () => {
  const columns = [
    {
      title: "Area",
      dataIndex: "Area",
      key: "Area",
    },
    {
      title: "Opening",
      dataIndex: "Opening",
      key: "Opening",
    },
    {
      title: "Activated",
      dataIndex: "Activated",
      key: "Activated",
    },
  ];
  const data = [
    {
      key: "1",
      Area: "Colombo",
      Opening: 32,
      Activated: "10",
    },
    {
      key: "1",
      Area: "Colombo",
      Opening: 32,
      Activated: "10",
    },
    {
      key: "1",
      Area: "Colombo",
      Opening: 32,
      Activated: "10",
    },
    {
      key: "1",
      Area: "Colombo",
      Opening: 32,
      Activated: "10",
    },
    {
      key: "1",
      Area: "Colombo",
      Opening: 32,
      Activated: "10",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md mt-4">
      <DashboardHeader
        title="Account Opening Per Branch"
        tag="Branch wise account opening activities"
      ></DashboardHeader>
      <div
        className="mt-4"
        style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
      >
        <Table columns={columns} dataSource={data} pagination={false}></Table>
        <img
          className="w-full"
          src={require("../../../img/srilanka_with_stats.png")}
          alt="pic"
        />
      </div>
    </div>
  );
};
