import { Tabs } from "antd";
import { TabPaneProps } from "antd/lib/tabs";
import React, { FC } from "react";

const { TabPane } = Tabs;

const TabCotainerPane: FC<TabCotainerPaneProps & TabPaneProps> = (props) => {
  return (
    <TabPane className="px-5" {...props}>
      {props.children}
    </TabPane>
  );
};
interface TabCotainerPaneProps {}

export default TabCotainerPane;
