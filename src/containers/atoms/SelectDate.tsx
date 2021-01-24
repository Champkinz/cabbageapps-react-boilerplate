import { DatePicker } from "antd";
import { Moment } from "moment";
import React from "react";

interface dateProps {
  disabled?: boolean;
  className?: string;
  onChange?: (date: any, dateString: string) => void;
  value?: Moment;
}

function SelectDate(props: dateProps) {
  return (
    <div>
      <DatePicker
        onChange={props.onChange}
        className={`${props.className} h-8 mt-1 text-xxxs`}
        disabled={props.disabled}
        style={{ width: "50%" }}
        value={props.value}
      />
    </div>
  );
}

export default SelectDate;
