import { Table } from "antd";
import React from "react";

interface tableProps {
  columns: Array<Object>;
  data: Array<Object>;
  className?: string;
  fontSize?: string;
  pagination?: {
    defaultPageSize?: number;
  };
}

function SmallTableTemplate(props: tableProps) {
  return (
    <Table
      dataSource={props.data}
      size="small"
      className={`${props.className} `}
      pagination={props.pagination || false}
    >
      {props.columns.map((item: any) => {
        return (
          <Table.Column
            title={<span className="text-xs">{item.title}</span>}
            dataIndex={item.dataIndex}
            key={item.key}
            render={text => {
              return <span className="text-xs">{text}</span>;
            }}
          ></Table.Column>
        );
      })}
    </Table>
  );
}

export default SmallTableTemplate;
