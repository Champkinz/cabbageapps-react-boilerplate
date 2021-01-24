import { Alert } from "antd";
import React from "react";
import { iDisplayMessage } from "../card-messages";

export const CardMessages = ({ messages }: { messages: iDisplayMessage[] }) => {
  return (
    <>
      {messages
        .map((message) => (
          <Alert
            message={message.title}
            description={message.description}
            type={message.type}
            showIcon
          />
        ))
        .map((ele) => (
          <div className="my-4">{ele}</div>
        ))}
    </>
  );
};
