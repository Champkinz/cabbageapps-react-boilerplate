import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import BasicSelect from "../../atoms/BasicSelect.atom";
import SmallTableTemplate from "../SmallTableTemplate";

interface tableProps {
  columns: Array<Object>;
  data: Array<Object>;
}

function SearchTableTemplate(props: tableProps) {
  const dataSource = props.data.map((item: any) => {
    return {
      key: item.key,
      name: item.name,
      id: item.id,
      dob: item.dob,
      code: 23233134241424,
      photo: (
        <div className="h-0 flex justify-center items-center">
          <Avatar
            icon={item.photo}
            className="transform -translate-y-3 scale-75"
          ></Avatar>
        </div>
      ),
      sign: item.sign,
      system: item.system,
      tag: (
        <Tag color="blue" className="transform scale-75">
          {item.tag}
        </Tag>
      ),
      action: (
        <Button type="link" className="text-xxxs p-0">
          <Link to={item.action}>Select</Link>
        </Button>
      ),
    };
  });

  return (
    <div className="h-full pt-2 pb-2 px-16">
      <div className="bg-white h-full rounded-lg pt-8">
        <div
          className="px-4 py-2 flex justify-between"
          style={{ background: "#F8F8F8" }}
        >
          <Input className="w-3/6 h-8 text-xs" placeholder="Search..."></Input>
          <div className="flex w-2/6  border-red-400 justify-end">
            <BasicSelect
              className="w-1/2"
              optionArr={["Customer ID", "Account Number"]}
            />
            <Button
              block={true}
              size="middle"
              type="primary"
              style={{ borderRadius: 0 }}
              className="flex align-middle justify-between px-2 w-1/4 text-center py-0"
            >
              <p className="text-xxs text-center flex align-middle justify-between">
                <span>Search</span>
                <SearchOutlined
                  className="text-xs pl-2"
                  style={{ marginTop: "3px" }}
                />
              </p>
            </Button>
          </div>
        </div>
        <div>
          <SmallTableTemplate columns={props.columns} data={dataSource} />
        </div>
      </div>
    </div>
  );
}

export default SearchTableTemplate;
