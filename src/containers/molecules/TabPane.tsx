import { Tabs } from "antd";
import React from "react";

interface tabpaneProps {
  tabNames: Array<string>;
  activeKey?: number;
  onTabClick?: (key: string) => void;
}

function TabPane(props: tabpaneProps) {
  return (
    <Tabs
      // size="small"
      className="relative mb-0 z-20 opacity-1"
      tabBarStyle={{
        paddingLeft: "1rem",
        background: "#fcfcfc",
        // height: "2rem",
      }}
      onTabClick={props.onTabClick}
      tabBarGutter={15}
      activeKey={props.activeKey?.toString() || ""}
    >
      {props.tabNames.map((item: any, index: number) => {
        return (
          <Tabs.TabPane
            style={{ outline: "0 !important" }}
            key={`${index}`}
            tab={
              <span className="text-xs flex items-center">
                {item}
                {/* <Badge className="ml-2" color="blue"></Badge> */}
              </span>
            }
          ></Tabs.TabPane>
        );
      })}
    </Tabs>
  );
}

export default TabPane;
