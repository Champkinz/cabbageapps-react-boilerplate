import React, { useState } from "react";
import SecondHeaderTabPaneTemplate from "../../../templates/SecondHeaaderTabPaneTemplate/SecondHeaderTabPaneTemplate";

function ActivateAccountHeader({ title }: { title: string }) {
  const tabNames = ["Pending", "Approved", "Rejected"];

  const [activeTab, setActiveTab] = useState({ name: "Pending", key: 0 });
  const tabClick = (e: any) => {
    switch (e.toString()) {
      case "0":
        setActiveTab({ name: tabNames[0], key: e });
        break;
      case "1":
        setActiveTab({ name: tabNames[1], key: e });
        break;
      case "2":
        setActiveTab({ name: tabNames[2], key: e });
        break;
    }
  };

  return (
    <SecondHeaderTabPaneTemplate
      title={title || "Activate Accounts"}
      tabnames={tabNames}
      onTabClick={tabClick}
      activeKey={activeTab.key}
    />
  );
}

export default ActivateAccountHeader;
