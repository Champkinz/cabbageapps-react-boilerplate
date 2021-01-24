import { DeleteOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import React, { FC, useState } from "react";
import DateFilter, { dateX } from "../atoms/DateFilter.atom";
import { P } from "../atoms/typography";

const DateFilterDDown: FC<DateFilterDDownProps> = ({ onChange }) => {
  const [date, setDate] = useState<dateX | null>();
  const [isVisible, setisVisible] = useState(false);

  const setdate = (value: any, date: dateX) => {
    setDate(date);
    onChange && onChange(value, { ...date, filterCleared: false });
    setisVisible(false);
  };

  const clearFilter = () => {
    setDate(null);
    onChange &&
      onChange(null, { from: "", to: "", type: "", filterCleared: true });
  };

  return (
    <div className="flex flex-row items-center">
      {date && (
        <div
          onClick={clearFilter}
          className="flex flex-row items-center cursor-pointer"
        >
          <DeleteOutlined className="hover:bg-gray-400 p-1 rounded-full" />
          <div className="bg-blue-300 rounded-full mx-1">
            <P bold fontSize={14} className="px-2">
              {date?.from}
            </P>
          </div>

          <div className="bg-red-300 rounded-full mx-1">
            <P bold fontSize={14} className="px-2 ">
              {date?.to}
            </P>
          </div>
        </div>
      )}

      <Dropdown
        visible={isVisible}
        onVisibleChange={setisVisible}
        overlay={<DateFilter onChange={setdate} />}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Button
          onClick={() => setisVisible(true)}
          icon={<FilterOutlined style={{ fontSize: "1rem" }} />}
        />
      </Dropdown>
    </div>
  );
};

interface DateFilterDDownProps {
  onChange?: (value: any, date: dateX) => any;
}

export default DateFilterDDown;
