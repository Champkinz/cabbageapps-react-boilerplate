import { Button, Result } from "antd";
import React from "react";
import { assets } from "../../../../ui-helpers/assets";

const ErrorHandle500 = () => {
  return (
    <Result
      style={{ backgroundColor: assets.color.white }}
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default ErrorHandle500;
