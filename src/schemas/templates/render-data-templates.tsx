import { Tag } from "antd";
import moment from "moment";
import React from "react";
import { P } from "../../containers/atoms/typography";
import { DataTypes } from "../data-types";
import { ColumnSchema } from "../table-schema";
import { WidgetTypes } from "../widget-types";

// Used to render columns in tables when data type is given
export const ColumnRenderFunctions: {
  [key in DataTypes]: (schema?: ColumnSchema) => (input: any) => JSX.Element;
} = {
  STRING: (schema?: ColumnSchema) => {
    return (text: string) => <P className="text-xs"> {text} </P>;
  },
  TAG: (schema?: ColumnSchema) => {
    return (tag: string) => <Tag color={"green"}> {tag} </Tag>;
  },
  DATE: (schema?: ColumnSchema) => {
    return (date: string) => (
      <P className="text-xs"> {moment(date).format(schema?.format)} </P>
    );
  },
  IMAGE: (schema?: ColumnSchema) => {
    return (url: string) => <P className="text-xs"> {url} </P>;
  },
};

// used to render columns when widget/field type is given
export const FieldTypesRenderFunctions: {
  [key in WidgetTypes]: (input: any) => JSX.Element;
} = {
  TEXT_STRING: ColumnRenderFunctions.STRING(),
  TEXTAREA: ColumnRenderFunctions.STRING(),
  SELECT: ColumnRenderFunctions.STRING(),
  NUMBER: ColumnRenderFunctions.STRING(),
  CHECKBOX: ColumnRenderFunctions.STRING(),
  REMOTE_SELECT: ColumnRenderFunctions.STRING(),
  REMOTE_MULTI_SELECT: ColumnRenderFunctions.STRING(),
  DATE: ColumnRenderFunctions.STRING(),
  SWITCH: ColumnRenderFunctions.STRING(),
  FILE_DROPPER: ColumnRenderFunctions.STRING(),
  FILE_UPLOAD: ColumnRenderFunctions.STRING(),
  CUSTOM: ColumnRenderFunctions.STRING(),
};
