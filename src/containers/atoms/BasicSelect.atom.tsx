import { Select } from "antd";
import React from "react";

interface selectProps {
  optionArr: Array<string>;
  className?: string;
  size?: any;
  disabled?: boolean;
  onChange?: any;
  defaultValue?: string;
}

function BasicSelect(props: selectProps) {
  // const [value,setValue] = useState("")
  return (
    <Select
      defaultValue={props.optionArr[0]}
      className={`${
        props.className
          ? `${props.className} text-xxxs`
          : "text-xxxs pt-0 pb-0 w-1/2"
      } `}
      defaultActiveFirstOption={true}
      size={props.size}
      disabled={props.disabled}
      onChange={props.onChange}
    >
      {props.optionArr.map((item, index) => {
        return (
          <Select.Option className="text-xxxs" value={item} key={index}>
            {item}
          </Select.Option>
        );
      })}
    </Select>
  );
}

export default BasicSelect;
