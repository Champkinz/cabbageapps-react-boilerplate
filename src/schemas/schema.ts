import { SDK } from "../sdk";
import { FormItemSchema } from "./form-schema";

export interface FunctionSchema {
  functionName: string; // Eg: Account Opening
  module: string; // Account
  subModule?: string; // Account Opening
  steps?: FunctionSchema_Step[];
  apis: {
    [actionName: string]: (SDK: SDK) => Function;
  };
}

export interface FunctionSchema_Step {
  title: string;
  description?: string;
  subSteps?: FunctionSchema_SubStep[];
  cards?: FunctionSchema_Cards[];
}

export interface FunctionSchema_SubStep {
  title: string;
  description?: string;
  cards?: FunctionSchema_Cards[];
}

export interface FunctionSchema_Cards {
  title: string;
  description?: string;
  sections?: FunctionSchema_Sections[];
  fields: FormItemSchema[];
  displayCondition?: (globalFormValue?: any) => boolean;
}

export interface FunctionSchema_Sections {
  title: string;
  description?: string;
  fields: FormItemSchema[];
}
