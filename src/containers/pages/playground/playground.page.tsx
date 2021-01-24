import {
  CheckCircleOutlined,
  CopyOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
  StopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, notification, Steps, Tooltip } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import "../../../utils/deep-diff";
import { P } from "../../atoms/typography";

const { Step } = Steps;

const PlaygroundPage = () => {
  const openNotification = (value: string) => {
    notification.open({
      message: <P bold>Copied to clipboard</P>,
      description: "Account Number " + value,
      icon: <CopyOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const copyValue = (event: any, value: any) => {
    var TextAreaElement = document.createElement("textarea");

    // Place in outside of the visible area of the screen regardless of scroll position.
    TextAreaElement.style.position = "absolute";
    TextAreaElement.style.top = "-100";
    TextAreaElement.style.left = "0";

    // add text to the textbox
    TextAreaElement.value = value;

    // append TextAreaElement to document
    document.body.appendChild(TextAreaElement);

    // select the content
    TextAreaElement.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("msg :", msg);
      openNotification(value);
    } catch (err) {}

    // remove the TextAreaElement from the document
    document.body.removeChild(TextAreaElement);

    // unload
    TextAreaElement = undefined as any;
  };

  return (
    <div className="p-20">
      <Modal
        visible
        // closeIcon={<div />}
        width={"70%"}
        footer={null}
        children={
          // left: -18px;
          // top: 16px;
          // /* z-index: 0; */
          // /* background-color: blue; */
          // /* width: 80px; */
          // /* height: 20px; */
          // transform: rotate(-45deg);
          // position: absolute;
          // /* border-left: 74px solid transparent; */
          // border-bottom: 16px solid blue;
          // border-left: 16px solid transparent;
          // border-right: 16px solid transparent;
          // height: 0;
          // width: 85px;
          // /* border-radius: 10px;
          <>
            <div
              style={{
                left: -18,
                top: 16,
                position: "absolute",
                borderBottom: "16px solid #1890ff",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                height: 0,
                width: 85,
                transform: "rotate(-45deg)",
              }}
              className="flex flex-row justify-center"
            >
              <P fontSize={12} color="white">
                BETA
              </P>
            </div>
            <div className="flex flex-row justify-center">
              <P bold>Account Number</P>
              <div className="flex flex-row items-center">
                <div
                  style={{ backgroundColor: "#1890ff" }}
                  className="flex flex-row ml-4 px-4 text-white rounded-lg cursor-pointer hover:bg-blue-600"
                  onClick={(event) => copyValue(event, "011156897")}
                >
                  <P bold> 011156897</P>
                </div>
                <Tooltip title="Click the banner to copy the account number">
                  <InfoCircleOutlined
                    className="pl-2 cursor-pointer"
                    style={{ fontSize: 20 }}
                  />
                </Tooltip>
              </div>
            </div>
            <Card className="m-5">
              <P bold>Approve Workflow</P>
              <Steps className="p-5">
                <Step
                  status="finish"
                  title="Account Creation"
                  icon={<UserOutlined />}
                  description="Created by Sampath 2020/08/12"
                />
                <Step
                  status="finish"
                  title="Confirmation"
                  description="Will be Confirmed by Udara"
                  icon={<SolutionOutlined />}
                />
                <Step
                  status="wait"
                  title="Approve"
                  icon={<CheckCircleOutlined />}
                />
              </Steps>
            </Card>
            <Card className="m-5">
              <P bold>Decline Workflow</P>
              <Steps className="p-5">
                <Step
                  status="finish"
                  title="Account Creation"
                  icon={<UserOutlined />}
                  description="Created by Sampath 2020/08/12"
                />
                <Step
                  status="finish"
                  title="Confirmation"
                  description="Will be Decline by Udara"
                  icon={<SolutionOutlined />}
                />
                <Step status="wait" title="Decline" icon={<StopOutlined />} />
              </Steps>
            </Card>
          </>
        }
      />
    </div>
  );
};

export default PlaygroundPage;
