import { DownOutlined, HourglassOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Popover, TimePicker } from "antd";
import React from "react";

const MenuList = () => {
  return (
    <Menu>
      <Menu.Item>
        <p>High</p>
      </Menu.Item>
      <Menu.Item>
        <p>Medium</p>
      </Menu.Item>
      <Menu.Item>
        <p>Low</p>
      </Menu.Item>
    </Menu>
  );
};

const content = () => {
  return (
    <div>
      <TimePicker use12Hours />
    </div>
  );
};

export const CollapseText = ({ title }: { title: String }) => {
  return (
    <div className="flex justify-between my-2">
      <p>{title}</p>
      <Popover content={content} placement="bottom">
        <p className="text-blue-500">
          <HourglassOutlined className="mr-1" /> Start Time
        </p>
      </Popover>

      <Dropdown overlay={MenuList}>
        <p className="text-blue-500">
          Set Priority
          <DownOutlined className="ml-2" />
        </p>
      </Dropdown>
    </div>
  );
};
