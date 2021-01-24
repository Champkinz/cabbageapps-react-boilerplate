import { FormInstance } from "antd/lib/form";
import { ResourceBrowserSchema } from "./resource-browser";
import { EditableColumnSchema } from "./table-schema";
import { EditableWidgetSchema } from "./widget-schema";
import { WidgetTypes } from "./widget-types";

export type FormElementTypes =
  | WidgetTypes
  | "COLLECTION"
  | "EDITABLE_TABLE"
  | "MULTI_LEVEL_DROPDOWN_COLLECTION"
  | "TITLE"
  | "DESCRIPTION"
  | "FORM_ROW";

export interface FormItemSchema extends EditableWidgetSchema {
  type: FormElementTypes;
  body?: string;
  class?: string;
  isEditable?: boolean;
  isReadOnly?: boolean;
  fields?: EditableWidgetSchema[];
  columns?: EditableColumnSchema[];
  addResourceText?: string;
  addResouceSchema?: ResourceBrowserSchema;
  emptyRecord?: any;
  resourceMapFunction?: (record: any) => any;
  level1?: {
    key: string;
    spec: any;
  };
  level2?: {
    key: string;
    spec: any;
  };
  uploadSpec?: { action: any };
  customElement?: (props: {
    schema: FormItemSchema;
    form: FormInstance;
    formState?: any;
    onExtraFieldMapped?: () => any;
  }) => JSX.Element;
}
