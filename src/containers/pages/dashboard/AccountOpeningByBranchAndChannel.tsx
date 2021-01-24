import { DownOutlined } from "@ant-design/icons";
import { Card, Dropdown, Menu } from "antd";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DashboardHeader } from "../../atoms/DashboardHeader";

const MenuList = () => {
  return (
    <Menu>
      <Menu.Item>
        <p>Colombo</p>
      </Menu.Item>
      <Menu.Item>
        <p>Negambo</p>
      </Menu.Item>
      <Menu.Item>
        <p>Galle</p>
      </Menu.Item>
    </Menu>
  );
};

export const AccountOpeningByBranchAndChannel = () => {
  return (
    <div className="bg-white p-4 rounded-md mt-4">
      <DashboardHeader
        title="Account Opening By Branch And Channel"
        tag="Branch & Channel wise account opening activities"
      />
      <div className="grid" style={{ gridTemplateColumns: "55% 45%" }}>
        <div className="flex justify-center align-middle mt-4">
          <LineChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <Dropdown overlay={MenuList}>
              <p className="text-blue-500">
                Select Branch
                <DownOutlined className="ml-2" />
              </p>
            </Dropdown>
            <p className="text-blue-500">Showing: This Year</p>
          </div>
          <DashboardHeader
            title="Branch:Colombo"
            tag="Information for branch:Colombo"
          />
          <div className="flex mt-8 mb-4">
            <Card
              size="small"
              title="Summary"
              style={{ width: "300px", height: "150px" }}
              className="mr-4 shadow-xs"
            >
              <div className="flex justify-between">
                <p>Total Accounts Opened: </p>
                <p>123</p>
              </div>
              <div className="flex justify-between">
                <p>Total Accounts Activated: </p>
                <p>123</p>
              </div>
            </Card>
            <Card
              size="small"
              title="Analysis"
              style={{ width: "200px", height: "250px" }}
              className="shadow-xs"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                adipisci, ea debitis corrupti quae voluptatibus laboriosam quis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
