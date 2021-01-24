import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router";

const ErrorHandleUnderConstruction = () => {
  const history = useHistory()
  return (
    <Result
      className="bg-white"
      icon={
        <div className="flex flex-1 justify-center">
          <img
            src={require("../../../../img/under_construction.jpg")}
            style={{ width: "40%", height: "auto" }}
          />
        </div>
      }
      title="Oops!"
      subTitle="This Page is Under Construction"
      extra={<Button type="primary" onClick={() => history.goBack()}>Go Back</Button>}
    />
  );
};

export default ErrorHandleUnderConstruction;
