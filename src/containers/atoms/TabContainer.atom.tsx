import { Tabs } from "antd";
import React, { FC } from "react";

const TabContainer: FC<TabContainerProps> = ({ children }) => {
  return (
    <Tabs
      className="relative mb-0 z-20 opacity-1 w-full"
      tabBarStyle={{
        paddingLeft: "1rem",
        background: "#fcfcfc",
      }}
      defaultActiveKey="1"
    >
      {children}
    </Tabs>
  );
};

interface TabContainerProps {}

export default TabContainer;
