import { Button, Result } from "antd";
import React from "react";

const ErrorHandleUnderQATesting = () => {
  return (
    <Result
      className="bg-white"
      icon={
        <div className="flex flex-1 justify-center">
          <img
            src={require("../../../../img/under_qatesting.png")}
            style={{ width: "40%", height: "auto" }}
          />
        </div>
      }
      title="Oops!"
      subTitle="This Page is Under QA Testing"
      extra={<Button type="primary">Go Back</Button>}
    />
  );
};

export default ErrorHandleUnderQATesting;
