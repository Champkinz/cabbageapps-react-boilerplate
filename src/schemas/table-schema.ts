import { DataTypes } from "./data-types";
import { EditableWidgetSchema } from "./widget-schema";

export interface ColumnSchema {
  label: string;
  key: string;
  dataType: DataTypes;
  format?: string;
  hidden?: boolean;
}

export interface EditableColumnSchema extends ColumnSchema {
  isEditable?: boolean;
  noSend?: boolean;
  widgetSchema?: EditableWidgetSchema;
}
