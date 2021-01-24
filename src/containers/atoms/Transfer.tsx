import { Transfer as TRNF } from "antd";
import { TransferItem } from "antd/lib/transfer";
import React, { FC, useState } from "react";
import styled from "styled-components";

const Decodiv = styled.div`
  .ant-btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface TransferPops {
  data: TransferItem[];
  defaultSelectedKeys: string[];
  selection?: (s: string[]) => any;
  mandatory?: boolean;
  selectedItemKeys?: (s: string[]) => any;
}

export const Transfer: FC<TransferPops> = ({
  data,
  defaultSelectedKeys,
  selection,
  mandatory,
  selectedItemKeys,
}) => {
  const [targetKeys, settargetKeys] = useState<string[]>(
    defaultSelectedKeys || []
  );
  const [selectedKeys, setselectedKeys] = useState<string[]>([]);
  const [disabled_, setdisabled] = useState<any>(false);

  const handleChange = (nextTargetKeys: any, direction: any, moveKeys: any) => {
    settargetKeys(nextTargetKeys);
    selectedItemKeys!(nextTargetKeys);
  };

  const handleSelectChange = (
    sourceSelectedKeys: any,
    targetSelectedKeys: any
  ) => {
    setselectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    if (selection) {
      selection([...sourceSelectedKeys, ...targetSelectedKeys]);
    }
  };

  const handleScroll = (direction: any, e: any) => {};

  const handleDisable = (disabled: any) => {
    setdisabled(!disabled_);
  };

  return (
    <Decodiv>
      <TRNF
        dataSource={data}
        // titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange as any}
        onSelectChange={handleSelectChange as any}
        onScroll={handleScroll as any}
        oneWay
        render={(item: any) => {
          if (targetKeys.includes(item.key)) {
            return <p>s -{item.title}</p>;
          }
          return <p>{item.title}</p>;
        }}
        disabled={disabled_}
        listStyle={{ width: 350, height: 200 }}
        style={{ marginBottom: 16 }}
      />
      {/* <Switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        checked={disabled_}
        onChange={handleDisable}
      /> */}
    </Decodiv>
  );
};
