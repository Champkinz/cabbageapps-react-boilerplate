import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React from "react";

interface checkProps {
  title: string;
  className?: string;
  onChange?: ((e: CheckboxChangeEvent) => void) | undefined;

  checked?: boolean;
}

function BasicCheckbox(props: checkProps) {
  return (
    <Checkbox
      onChange={props.onChange}
      checked={props.checked}
      className={`${props.className} ` || "p-0"}
    >
      {props.title}
    </Checkbox>
  );
}

export default BasicCheckbox;
