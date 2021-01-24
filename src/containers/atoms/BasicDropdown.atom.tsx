import { Select } from "antd";
import React, { FC, useEffect, useState } from "react";
import { P } from "./typography";
const { Option } = Select;

const DropDown: FC<DropDownProps> = ({
  title,
  data,
  defaultKey,
  onChange,
  disabled,
}) => {
  const [type, setType] = useState(
    data ? (defaultKey ? defaultKey : data![0].key) : ""
  );

  useEffect(() => {
    onChange && onChange(type);
  }, [onChange, type]);

  return (
    <div className="flex flex-1 flex-col">
      {title && (
        <P fontSize={"0.9rem"} color="#979797">
          {title || "Title"}
        </P>
      )}

      <div className="flex flex-1 flex-row pt-1">
        <Select
          style={{ minWidth: 200 }}
          value={type}
          onChange={setType}
          onClick={(e: any) => e.stopPropagation()}
          disabled={disabled}
        >
          {data &&
            data.map((item) => (
              <Option value={item.key} disabled={item.disabled}>
                {item.name}
              </Option>
            ))}
        </Select>
      </div>
    </div>
  );
};

interface DropDownProps {
  title?: string;
  data?: { key: string; name: string; disabled?: boolean }[];
  defaultKey?: string;
  onChange?: (value: string) => any;
  disabled?: boolean;
}

export default DropDown;
