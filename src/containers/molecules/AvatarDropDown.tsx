import {
  DownOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import React, { useState } from "react";
import LanguageSelectionModal from "../organisms/LanguageSelectionModal";

function AvatarDropDown({
  onLogout,
  userName,
  userAvatar,
}: {
  onLogout: () => any;
  userName: string;
  userAvatar: string;
}) {
  const [showModal, setShowModal] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => setShowModal(true)}
        className="flex align-middle  pr-20"
      >
        <GlobalOutlined style={{ marginTop: ".32rem" }} />
        <p className="text-xs">English</p>
      </Menu.Item>
      <Menu.Item
        className="flex align-middle justify-between"
        onClick={onLogout}
      >
        <div className="flex align-middle">
          <LogoutOutlined
            className="text-xxs"
            style={{ marginTop: ".35rem" }}
          />
          <p className="text-xs pl-2">Log out</p>
        </div>
      </Menu.Item>
      <Menu.Item className="flex align-middle justify-between">
        <div className="flex align-middle">
          <p>0.22v</p>
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <LanguageSelectionModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Dropdown overlay={menu} className="cursor-pointer">
        <div className="h-full flex items-center">
          <Avatar
            style={{ border: "2px solid #1890ff", padding: 2 }}
            size="small"
            className="mr-1"
            src={userAvatar}
          />
          <p className="text-xs">{userName}</p>
          <DownOutlined className="text-xs ml-1 transform scale-75" />
        </div>
      </Dropdown>
    </>
  );
}

export default AvatarDropDown;
