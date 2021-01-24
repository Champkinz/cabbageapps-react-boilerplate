import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DashboardHeader } from "../../atoms/DashboardHeader";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const AccountOpeningByChannel = () => {
  return (
    <div className="bg-white p-4 rounded-md mt-4">
      <DashboardHeader
        title="Account Opening By Channel"
        tag="Branch & Channel wist account opening activities"
      />
      <div className="flex justify-center w-full mt-8 mb-8">
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
    </div>
  );
};
