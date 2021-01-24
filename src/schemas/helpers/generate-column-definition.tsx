import { Space } from "antd";
import React from "react";
import { P } from "../../containers/atoms/typography";
import { assets } from "../../ui-helpers/assets";
import { EditableColumnSchema } from "../table-schema";
import { ColumnRenderFunctions } from "../templates/render-data-templates";

export const GenerateColumnDefinitions = <T extends unknown>(
  schema: EditableColumnSchema[],
  actions?: {
    name: string;
    onClick: (record: T) => any;
    isDisabled?: boolean;
  }[]
) => {
  const columns = [
    ...schema.map((field) => ({
      ...field,
      title: () => <P className="text-xs">{field.label}</P>,
      dataIndex: field.key,
      key: field.key,
      render: (ColumnRenderFunctions as any)[field.dataType]
        ? (ColumnRenderFunctions as any)[field.dataType](field)
        : undefined,
    })),
  ];

  if (actions) {
    columns.push({
      title: () => <P className="text-xs">Actions</P>,
      key: "actions",
      render: (text: any, record: any) => (
        <Space size="middle" className="cursor-pointer">
          {actions.map((action) => (
            <P
              className="text-xs"
              color={assets.color.text_blue}
              onClick={() => action.onClick(record)}
              style={
                action.isDisabled ? { display: "none" } : { display: "block" }
              }
            >
              {action.name}
            </P>
          ))}
        </Space>
      ),
    } as any);
  }
  return columns;
};
