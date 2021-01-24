import { Button, Result } from "antd";
import React from "react";
import { assets } from "../../../../ui-helpers/assets";

const ErrorHandle404 = () => {
  return (
    <Result
      style={{ backgroundColor: assets.color.white }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default ErrorHandle404;
