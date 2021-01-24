import { Form } from "antd";
import { FormItemProps as FIProps } from "antd/lib/form/FormItem";
import React, { FC } from "react";
import { assets } from "../../ui-helpers/assets";
import { P } from "./typography";

const FormItem: FC<FormItemProps2> = ({
  name,
  label,
  message,
  item,
  props
}) => {
  return (
    <>
      <P className="text-xs" color={assets.color.text_gray}>
        {label}
      </P>
      <Form.Item
        {...props}
        name={name}
        rules={[
          {
            required: true,
            message: message
          }
        ]}
      >
        {item}
      </Form.Item>
    </>
  );
};

export interface FormItemProps2 {
  name: string;
  label: string;
  message: string;
  item: JSX.Element;
  props?: FIProps;
}

export default FormItem;
