import { Input } from "antd";
import React from "react";

interface inputProps {
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

function BasicInput(props: inputProps) {
  return (
    <Input
      size="small"
      className={`${
        props.className
          ? `${props.className} pt-1 pb-1`
          : "w-2/4 text-xs pt-1 pb-1"
      }`}
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
      value={props.value}
    ></Input>
  );
}

export default BasicInput;
