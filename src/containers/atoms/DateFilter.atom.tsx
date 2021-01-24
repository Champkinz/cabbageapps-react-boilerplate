import { DatePicker, Menu, Select } from "antd";
import moment from "moment";
import React, { FC, useState } from "react";

const { RangePicker } = DatePicker;
const { Option } = Select;

const DateFilter: FC<DateFilterProps> = ({ onChange }) => {
  const [type, setType] = useState("date");

  const PickerWithType = ({ type, onChange }: { type: any; onChange: any }) => {
    switch (type) {
      case "date": {
        return (
          <DatePicker
            autoFocus
            onChange={(value: any, date: any) =>
              onChange(value, {
                from: date,
                to: moment(value)
                  .add(1, "d")
                  .format("YYYY-MM-DD"),
                type,
              })
            }
          />
        );
      }

      case "custom": {
        return (
          <RangePicker
            onChange={(value: any, date: any) =>
              onChange(value, {
                from: date[0],
                to: date[1],
                type,
              })
            }
          />
        );
      }

      case "week": {
        return (
          <DatePicker
            autoFocus
            picker={type}
            onChange={(value, date) =>
              onChange(value, {
                from: moment(value)
                  .startOf("week")
                  .format("YYYY-MM-DD"),
                to: moment(value)
                  .endOf("week")
                  .format("YYYY-MM-DD"),
                type,
              })
            }
          />
        );
      }

      case "month": {
        return (
          <DatePicker
            autoFocus
            picker={type}
            onChange={(value, date) =>
              onChange(value, {
                from: moment(value)
                  .startOf("month")
                  .format("YYYY-MM-DD"),
                to: moment(value)
                  .endOf("month")
                  .format("YYYY-MM-DD"),
                type,
              })
            }
          />
        );
      }

      case "quarter": {
        return (
          <DatePicker
            autoFocus
            picker={type}
            onChange={(value, date) =>
              onChange(value, {
                from: moment(value)
                  .startOf("quarter")
                  .format("YYYY-MM-DD"),
                to: moment(value)
                  .endOf("quarter")
                  .format("YYYY-MM-DD"),
                type,
              })
            }
          />
        );
      }

      case "year": {
        return (
          <DatePicker
            autoFocus
            picker={type}
            onChange={(value, date) =>
              onChange(value, {
                from: moment(value)
                  .startOf("year")
                  .format("YYYY-MM-DD"),
                to: moment(value)
                  .endOf("year")
                  .format("YYYY-MM-DD"),
                type,
              })
            }
          />
        );
      }

      default: {
        return null;
      }
    }
  };
  return (
    <Menu className="flex flex-1 flex-row">
      <Menu.Item>
        <Select
          value={type}
          onChange={setType}
          onClick={(e: any) => e.stopPropagation()}
        >
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
          <Option value="custom">Custom</Option>
        </Select>
      </Menu.Item>
      <Menu.Item>
        <div onClick={(e: any) => e.stopPropagation()}>
          <PickerWithType type={type} onChange={onChange} />
        </div>
      </Menu.Item>
    </Menu>
  );
};

interface DateFilterProps {
  onChange?: (value: any, date: dateX) => any;
}

export interface dateX {
  from: string;
  to: string;
  type: string;
  filterCleared?: boolean;
}

export default DateFilter;
