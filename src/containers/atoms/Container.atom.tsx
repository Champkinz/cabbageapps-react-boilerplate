import { ProfileTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import React, { FC } from "react";

const Container: FC<ContainerProps> = ({
  children,
  hug,
  next,
  previous,
  className,
  cards,
  confirmButton,
}) => {
  return (
    <div className="flex flex-1 h-full flex-row justify-between">
      <div
        className={`${!hug &&
          "flex flex-1 flex-col relative w-full h-full"} bg-white ${className}`}
        style={{ width: hug ? "fit-content" : "auto", paddingBottom: "3rem" }}
      >
        {children}
        {(next || previous) && (
          <div className="absolute bottom-0 flex w-full justify-end px-8 py-4">
            {previous && (
              <Button
                onClick={(e) => previous.onClick(e)}
                size="small"
                type="primary"
                className="px-8"
                disabled={previous.disabled}
              >
                {previous.name || "Previous"}
              </Button>
            )}

            {next && (
              <Button
                loading={next.loading}
                onClick={(e) => next.onClick(e)}
                size="small"
                type="primary"
                className="px-8 mx-2"
                disabled={next.disabled}
              >
                {next.name || "Next"}
              </Button>
            )}
          </div>
        )}

        {confirmButton && (
          <div className="absolute bottom-0 flex w-full justify-center px-8 py-4 mt-20">
            {confirmButton && (
              <Button
                onClick={(e) => confirmButton.onClick(e)}
                size="small"
                type="primary"
                className="px-8"
                disabled={confirmButton.disabled}
              >
                {confirmButton.name || "Confirm"}
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col px-2">
        <div
          style={{
            height: "45px",
          }}
          className=" flex justify-center shadow items-center font-bold w-full bg-white"
        >
          <ProfileTwoTone className="mx-2" />
          Information
        </div>

        {cards && <div className="h-full">{cards}</div>}
      </div>
    </div>
  );
};

interface ContainerProps {
  information?: OperationsProps;
  cards?: React.ReactNode;
  hug?: boolean;
  next?: {
    name?: string;
    onClick: (e?: any) => any;
    disabled?: boolean;
    loading?: boolean;
  };
  previous?: {
    name?: string;
    onClick: (e?: any) => any;
    disabled?: boolean;
    loading?: boolean;
  };
  confirmButton?: {
    name?: string;
    onClick: (e?: any) => any;
    disabled?: boolean;
    loading?: boolean;
  };
  className?: string;
}

interface OperationsProps {
  operationtype?: string;
  key?: number;
  accountNumber?: number;
  schemeCode?: string;
  casaIdentification?: string;
  customerName?: string;
  status?: string;
  accountType?: string;
  currencyCode?: string;
  accountOpenBranchDescription?: string;
  id?: number;
}

export default Container;
