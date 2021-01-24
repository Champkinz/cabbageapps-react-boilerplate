import { InputNumber } from "antd";
import React from "react";

interface inputNumber {
  className?: string;
  size?: any;
  value?: number;
  disabled?: boolean;
  onChange?: ((value: string | number | undefined) => void) | undefined;
}

function BasicInputNumber(props: inputNumber) {
  return (
    <InputNumber
      size={props.size}
      min={0}
      max={100}
      disabled={props.disabled}
      value={props.value}
      formatter={value => `${value}%`}
      parser={(value: any) => value.replace("%", "")}
      className={props.className ? `${props.className}` : "w-1/2 text-xxs"}
      onChange={props.onChange}
    ></InputNumber>
  );
}

export default BasicInputNumber;
