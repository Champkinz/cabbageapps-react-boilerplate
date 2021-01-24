import React from "react";

export const DashboardHeader = ({
  title,
  tag,
  style,
  className,
}: {
  title: String;
  tag: String;
  style?: any;
  className?: String;
}) => {
  return (
    <div className={`${className}`} style={style}>
      <h1 className="text-lg font-bold m-0 p-0">{title}</h1>
      <p className="text-xs text-gray-600 m-0 p-0">{tag}</p>
    </div>
  );
};
