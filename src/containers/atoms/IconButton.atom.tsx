import { Button } from "antd";
import React from "react";

interface iconBtnProps {
  icon: JSX.Element;
  text?: boolean;
  title?: string;
  className?: string;
  onClick?: () => void;
}

function IconButton(props: iconBtnProps) {
  return (
    <Button
      icon={
        <span
          className={`${props.text ? "pr-1" : "p-0"}
          text-xxxs inline-block flex  justify-center`}
          style={props.text ? { paddingTop: "6px" } : {}}
        >
          {props.icon}
        </span>
      }
      onClick={props.onClick}
      size="small"
      type="default"
      className={`${props.className} text-xxxs flex`}
    >
      <span className="text-xxxs inline-block align-middle">{props.title}</span>
    </Button>
  );
}
export default IconButton;
