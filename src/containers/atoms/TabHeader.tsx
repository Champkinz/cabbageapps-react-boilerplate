import React from "react";

interface tabHeaderProps {
  title: string;
  details?: string;
}

function TabHeader(props: tabHeaderProps) {
  return (
    <div>
      <h1 className="font-semibold text-sm p-0">{props.title}</h1>
      <p className="text-xxxs text-gray-600 transform -translate-y-1">
        {props.details}
      </p>
    </div>
  );
}
// border border-red-400
export default TabHeader;
