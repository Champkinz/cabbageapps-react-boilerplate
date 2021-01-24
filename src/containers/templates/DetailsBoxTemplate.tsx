import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import TabHeader from "../atoms/TabHeader";

interface templateProps {
  item: JSX.Element;
  title: string;
  details: string;
  btn?: boolean;
  className?: string;
}

function DetailsBoxTemplate(props: templateProps) {
  return (
    <div className={`${props.className} border border-gray-300 rounded shadow`}>
      <div className="flex justify-between items-center pb-2 pt-3 pr-4 pl-4">
        <div>
          <TabHeader title={props.title} details={props.details}></TabHeader>
        </div>
        <div className={`${props.btn ? "block" : "hidden"}`}>
          <Button type="primary" size="small" className="text-xxxs mr-4">
            Change Selected Customer
          </Button>
          <CloseOutlined />
        </div>
      </div>
      <div className="px-4 mb-4 mr-3  w-full">{props.item}</div>
    </div>
  );
}

export default DetailsBoxTemplate;
