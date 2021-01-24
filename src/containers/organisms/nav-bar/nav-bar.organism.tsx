// import { connect } from "react-redux";
// import { setLanguage } from "../../../store/modules/preferences/preferences.dispatchers";
// import { iStore } from "../../../store/store.model";
import {
  CreditCardOutlined,
  FileDoneOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  ProfileOutlined,
  ReadOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "animate.css/animate.css";
import { Menu } from "antd";
import React from "react";
import icon from "../../../img/icon.png";

export const Sidebar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Menu
      className="shadow rounded min-h-full"
      defaultOpenKeys={["sub_account"]}
      mode="inline"
      defaultSelectedKeys={["item_opening"]}
      theme="light"
    >
      <Menu.Item className="flex">
        <img alt="icon" className="w-10 mr-4" src={icon} />
        {collapsed ? null : (
          <div className="flex flex-col justify-center">
            <span className="leading-normal text-sm font-bold text-blue-900">
              MY
            </span>
            <span className="leading-normal text-xs text-blue-700">NAME</span>
          </div>
        )}
      </Menu.Item>
      <Menu.Item className="text-sm">
        <PieChartOutlined />
        <span>Dashboard</span>
      </Menu.Item>

      <Menu.SubMenu
        key="sub_account"
        title={
          <span className="text-sm">
            <UserOutlined />
            <span>Account</span>
          </span>
        }
      >
        <Menu.Item className="text-sm" key="item_opening">
          Account Opening
        </Menu.Item>
        <Menu.Item className="text-sm">Activate Accounts</Menu.Item>
        <Menu.Item className="text-sm">Approve Accounts</Menu.Item>
        <Menu.Item className="text-sm">Manage Accounts</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <span className="text-sm">
            <FileDoneOutlined />
            <span>Transactions</span>
          </span>
        }
      />
      <Menu.SubMenu
        title={
          <span className="text-sm">
            <CreditCardOutlined />
            <span>Cheque</span>
          </span>
        }
      />
      <Menu.SubMenu
        title={
          <span className="text-sm">
            <ProfileOutlined />
            <span>Statement</span>
          </span>
        }
      />
      <Menu.SubMenu
        title={
          <span className="text-sm">
            <ReadOutlined />
            <span>Passbook</span>
          </span>
        }
      />

      <Menu.Item className="text-sm">
        <SettingOutlined />
        <span>Settings</span>
      </Menu.Item>
      <Menu.Item className="text-sm">
        <InfoCircleOutlined />
        <span>Help & Contact</span>
      </Menu.Item>
    </Menu>
  );
};

// const mapState = (store: iStore) => ({
//   language: store.preferences.language,
// });
// const mapDispatch = () => ({
//   setLanguage,
// });

// const _NavBar = (
//   props: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
// ) => {
//   return (
//     <>
//       <div>Nav Bar</div>
//     </>
//   );
// };

// export const NavBar = connect(mapState, mapDispatch)(_NavBar);
