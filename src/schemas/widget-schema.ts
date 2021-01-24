import { SDK } from "../sdk";
import { WidgetTypes } from "./widget-types";

export interface EditableWidgetSchema {
  type?: WidgetTypes | any;
  label?: string;
  key?: string;
  // Used for Validation
  rules?: (
    | EditableWidgetSchemaRule_Required
    | EditableWidgetSchemaRule_LengthValidation
  )[];
  // Used only for select
  values?: EditableWidgetSchema_Value[];
  // Used only in checkboxed
  valueMap?: EditableWidgetSchema_ValueMap;
  // Used in remote Spec
  spec?: {
    api: (sdk: SDK) => Function;
    transformFunction?: Function;
    resourceUri?: (sdk: SDK) => Function;
    value: string;
    parameters?: string[];
    label: string | Function;
    extraFieldMappings?: {
      key: string;
      value: string | Function;
      noSend?: boolean;
    }[];
    selector?: string;
    onChangeResetFields?: string[];
  };
  hint?: string;
  class?: string;
  readOnly?: boolean;
  noSend?: boolean;
  defaultValue?: string | ((SDK: SDK, ...arg: any) => Promise<any>);
  defaultValueParameters?: string[]; // this is for the defaultvalue sdk function - (...args)
  format?: string; // Used for Date Formating
  displayCondition?: (localFormValue: any, globalFormValue?: any) => boolean;
  step?: number; // Used to format number fields
  disablePreviousDates?: boolean; //Used to disable previous dates from date picker
}

interface EditableWidgetSchema_RemoteValueSpec {
  api?: (sdk: SDK) => Function;
  transformFunction?: Function;
  value: string;
  label: string;
}

export interface EditableWidgetSchema_ValueMap {
  true: string;
  false: string;
}

export interface EditableWidgetSchema_Value {
  value: string;
  label: string;
}

interface EditableWidgetSchemaRule_Required {
  required: boolean;
  message: string;
}

interface EditableWidgetSchemaRule_LengthValidation {
  required?: boolean;
  message: string;
  len?: number;
}
