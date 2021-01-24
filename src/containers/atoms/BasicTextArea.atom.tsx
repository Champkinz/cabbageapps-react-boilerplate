import { Input } from "antd";
import React from "react";

interface inputProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?:
    | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
    | undefined;
}

function BasicTextArea(props: inputProps) {
  return (
    <Input.TextArea
      className={
        props.className
          ? `${props.className} text-xxs pt-1 pb-1 h-20`
          : "w-1/2 text-xxs pt-1 pb-1 h-20"
      }
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      disabled={props.disabled}
    ></Input.TextArea>
  );
}

export default BasicTextArea;
