import { SettingOutlined } from "@ant-design/icons";
import React from "react";
import dashboardPage from "./dashboard/dashboard.page";

export interface MenuItem {
  type: "LINK" | "GROUP";
  path?: string;
  pathMap: string;
  label: string;
  icon?: JSX.Element;
  breadcrumb?: {
    title: string;
    description: string;
  };
  component?: (props: any) => JSX.Element | any;
  children?: MenuItem[];
  visibleInMenu?: boolean;
}

export const navigation: { menu: MenuItem[] } = {
  menu: [
    //Dashboard
    {
      type: "LINK",
      pathMap: "/:tenant/dashboard",
      label: "Dashboard With Tenant",
      icon: <SettingOutlined />,
      breadcrumb: {
        title: "Dashboard",
        description: "",
      },
      component: dashboardPage,
      visibleInMenu: true,
    },
    //Dashboard
    {
      type: "LINK",
      pathMap: "/dashboard",
      label: "Dashboard",
      icon: <SettingOutlined />,
      breadcrumb: {
        title: "Dashboard",
        description: "",
      },
      component: dashboardPage,
      visibleInMenu: true,
    },
  ],
};
