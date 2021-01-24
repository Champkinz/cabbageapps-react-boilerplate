import { Table } from "antd";
import React from "react";
import { DashboardHeader } from "../../atoms/DashboardHeader";

export const RelationshipOfficer = () => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "Rank",
      key: "Rank",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Accounts",
      dataIndex: "Accounts",
      key: "Accounts",
    },
  ];
  const data = [
    {
      key: "1",
      Rank: "1",
      Name: "John Doe",
      Accounts: "10",
    },
    {
      key: "1",
      Rank: "2",
      Name: "John Doe",
      Accounts: "10",
    },
    {
      key: "1",
      Rank: "3",
      Name: "John Doe",
      Accounts: "10",
    },
    {
      key: "1",
      Rank: "4",
      Name: "John Doe",
      Accounts: "10",
    },
    {
      key: "1",
      Rank: "5",
      Name: "John Doe",
      Accounts: "10",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-md mt-4 ml-4">
      <div className="flex justify-between">
        <DashboardHeader
          title="Relationship Officer"
          tag="Accounts By Relationship Officers Opened Most to Least"
        />
        <p className="text-lg text-blue-400 font-bold">October</p>
      </div>

      <Table
        className="mt-4"
        columns={columns}
        dataSource={data}
        pagination={false}
      ></Table>
    </div>
  );
};
