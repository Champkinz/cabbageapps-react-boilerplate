import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface btnProps {
  type: any;
  title: string;
  to: string;
  style?: Object;
  disabled?: boolean;
  onClick?: any;
}

function NavButton(props: btnProps) {
  return (
    <Button
      className="w-20 text-xs pt-0 pb-0 h-6"
      size="small"
      type={props.type}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <Link to={props.to}>{props.title}</Link>
    </Button>
  );
}

export default NavButton;
