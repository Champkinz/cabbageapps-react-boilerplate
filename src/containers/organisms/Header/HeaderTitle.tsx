import { InfoCircleFilled } from "@ant-design/icons";
import React from "react";

function HeaderTitle(props: { title: string }) {
  return (
    <div>
      <h1 className="flex  font-semibold">
        {props.title} <InfoCircleFilled className="pt-1 ml-2 text-xs" />
      </h1>
    </div>
  );
}

export default HeaderTitle;
