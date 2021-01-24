import { Button } from "antd";
import { ButtonType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";
import classNames from "classnames";
import React, { ReactNode } from "react";

interface btnProps {
  type?: ButtonType;
  size?: SizeType;
  title: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

export const NormalButton: React.FC<btnProps> = ({
  type = "primary",
  size = "small",
  disabled = false,
  onClick,
  title,
  className,
}) => {
  const btnClass = classNames("w-20 text-xxxs pt-0 pb-0 h-6", {
    [`${className}`]: !!className,
  });
  return (
    <Button
      className={btnClass}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
