import "animate.css/animate.css";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { push } from "connected-react-router";
import React from "react";
import { connect, useSelector } from "react-redux";
import { CONFIG } from "../../config";
import logo from "../../img/blogo.png";
import { setLanguage } from "../../store/modules/preferences/preferences.dispatchers";
import { iStore } from "../../store/store.model";
import { P } from "../atoms/typography";
import { MenuItem, navigation } from "../pages/navigation";

const mapState = (store: iStore) => ({
  language: store.preferences.language,
});
const mapDispatch = (dispatch: any, ownProps: any) => ({
  setLanguage,
  navigate: (path: string) => {
    dispatch(push(`${CONFIG.base}${path}`));
  },
});

export const tenant = "tenant";
const replacePathTokens = (pathMapString: string) => {
  const tokenToReplace = [[":tenant", tenant]];
  return tokenToReplace.reduce(
    (path, token) => path.replace(token[0], token[1]),
    pathMapString
  );
};

const printMenu = (menuItem: MenuItem, navigate: (path: string) => any) => {
  if (menuItem.type === "LINK") {
    return (
      <Menu.Item
        key={menuItem.pathMap}
        icon={menuItem.icon}
        onClick={() => navigate(replacePathTokens(menuItem.pathMap))}
      >
        {menuItem.label}
      </Menu.Item>
    );
  } else {
    // GROUP
    return (
      <SubMenu
        key={menuItem.pathMap}
        icon={menuItem.icon}
        title={menuItem.label}
      >
        {(menuItem.children || [])
          .filter((subMenuItem) => subMenuItem.visibleInMenu)
          .map((subMenuItem) => printMenu(subMenuItem, navigate))}
      </SubMenu>
    );
  }
};

const _NavBar = (
  props: ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
) => {
  const state: any = useSelector((state) => state);

  return (
    <Menu
      style={
        state.uiState.sideBar.isCollapsed
          ? { maxWidth: 250, overflowX: "hidden", overflowY: "auto" }
          : {
              minWidth: 250,
              maxWidth: 250,
              overflowX: "hidden",
              overflowY: "scroll",
            }
      }
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]} this opens a menu tab as soon as it renders
      mode="inline"
      inlineCollapsed={state.uiState.sideBar.isCollapsed}
    >
      {/* Logo */}
      <div className="flex flex-1 flex-row items-center justify-around p-2">
        <>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: state.uiState.sideBar.isCollapsed ? 30 : 60,
              height: "auto",
            }}
          />
          <div
            className={`flex flex-1 flex-col justify-between h-5 px-6 ${
              state.uiState.sideBar.isCollapsed ? `hidden` : ``
            }`}
          >
            <P className="font-bold">MY</P>
            <P>NAME</P>
          </div>
        </>
      </div>

      {/* Navigation */}
      {navigation.menu
        .filter((menuItem) => menuItem.visibleInMenu)
        .map((menuItem) => printMenu(menuItem, props.navigate))}

      {/* CASA Module Management */}
      {/* <SubMenu key="sub5" icon={<SettingOutlined />} title="Settings">
        {SettingsSchema.navigation.list.map((settingCategory) => (
          <SubMenu key={settingCategory.title} title={settingCategory.title}>
            {settingCategory.children.map((item) => (
              <Menu.Item
                key={item.name}
                onClick={() => props.navigate(item.path)}
              >
                {item.name}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </SubMenu> */}
    </Menu>
  );
};

export const NavBar = connect(mapState, mapDispatch)(_NavBar);
