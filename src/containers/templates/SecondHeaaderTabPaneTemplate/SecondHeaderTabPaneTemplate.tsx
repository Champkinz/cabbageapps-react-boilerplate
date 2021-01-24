import { Tabs } from "antd";
import React from "react";
import HeaderTitle from "../../organisms/Header/HeaderTitle";

interface tabpaneProps {
  title: string;
  tabnames: string[];
  onTabClick?: (key: string) => void;
  activeKey: number;
}

function SecondHeaderTabPaneTemplate(props: tabpaneProps) {
  return (
    <div className="relative flex flex-col  h-full w-full pt-3">
      <HeaderTitle title={props.title}></HeaderTitle>
      <Tabs
        size="small"
        tabBarStyle={{ margin: 0 }}
        className="absolute bottom-0"
        tabBarGutter={24}
        onTabClick={props.onTabClick}
        activeKey={`${props.activeKey}`}
      >
        {props.tabnames.map((item, index) => {
          return (
            <Tabs.TabPane
              key={`${index}`}
              tab={<span className="text-xxs">{item}</span>}
            ></Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}

export default SecondHeaderTabPaneTemplate;
