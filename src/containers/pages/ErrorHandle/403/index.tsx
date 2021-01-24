import { Button, Result } from "antd";
import React from "react";
import { assets } from "../../../../ui-helpers/assets";

const ErrorHandle403 = () => {
  return (
    <Result
      style={{ backgroundColor: assets.color.white }}
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default ErrorHandle403;
