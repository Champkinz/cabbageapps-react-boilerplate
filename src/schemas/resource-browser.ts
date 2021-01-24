import { SDK } from "../sdk";
import { ColumnSchema } from "./table-schema";

export interface ResourcePaginationReqData {
  page: number;
  pageSize: number;
}

type iResourceCall<T> = (
  sdk: SDK,
  key?: string,
  paginationReq?: ResourcePaginationReqData
) => T;

export interface ResourceBrowserSchema {
  title: string;
  type:
    | "SIMPLE_SELECTOR"
    | "SIMPLE_SEARCH_SELECTOR"
    | "SEARCH_BY_FIELDS_SELECTOR";
  resourceFunction?: iResourceCall<any>;
  onLoadFunction?: iResourceCall<any>;
  transformFunction?: (res: any) => any;
  rowSelection?: boolean;
  liveSearch?: {
    searchKeys: string[];
  };
  enableRemotePagination?: boolean;
  tableSchema: ColumnSchema[];
  searchSchema?: {
    defaultSearchKey: string;
    fields: {
      id: string;
      label: string;
      resourceFunction?: iResourceCall<any>;
      enableRemotePagination?: boolean;
      transformFunction?: (res: any) => any;
    }[];
  };
}
