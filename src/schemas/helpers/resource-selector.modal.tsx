import { Alert, Button, Input, Modal, Pagination, Select, Table } from "antd";
import _ from "lodash";
import React, { useState } from "react";
import { useSDK } from "../../utils/hooks/useSDK";
import { ResourceBrowserSchema } from "../resource-browser";
import { GenerateColumnDefinitions } from "./generate-column-definition";

export const ResourceSelectorModal = ({
  onResourceSelected,
  isVisible,
  onCancel,
  schema,
  onLoadSearchTerm,
  onRowSelection,
  onOk,
}: {
  onResourceSelected?: (resource: any) => any;
  isVisible: boolean;
  onCancel?: () => any;
  schema: ResourceBrowserSchema;
  onLoadSearchTerm?: string;
  onRowSelection?: (selectedRowKeys: any, selectedRow: any) => any;
  onOk?: () => any;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [searchKey, setSearchKey] = useState(
    schema.searchSchema?.defaultSearchKey
  );

  const [paginationConfig, setPaginationConfig] = useState({
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    current: 1,
  });

  const onPaginationChange = (page: number, pageSize?: number) => {
    const newPaginationConfig = { ...paginationConfig, current: page };
    if (pageSize) {
      newPaginationConfig.pageSize = pageSize;
    }
    setPaginationConfig(newPaginationConfig);
  };

  const { data, loading } = useSDK<any[]>(
    (SDK) =>
      new Promise((res, rej) => {
        const async = async () => {
          try {
            // Get Resource Call Function
            let resourceCall = schema.resourceFunction!;
            let onLoadCall = schema.onLoadFunction!;

            let enableRemotePagination = schema.enableRemotePagination;
            let transformFunction = schema.transformFunction;

            if (schema.type === "SEARCH_BY_FIELDS_SELECTOR") {
              const fieldToSearchBy = _.find(schema.searchSchema?.fields, {
                id: searchKey,
              });
              resourceCall = fieldToSearchBy?.resourceFunction!;
              if (fieldToSearchBy!.enableRemotePagination !== undefined) {
                enableRemotePagination =
                  fieldToSearchBy?.enableRemotePagination;
              }
              if (fieldToSearchBy!.transformFunction !== undefined) {
                transformFunction = fieldToSearchBy?.transformFunction;
              }
            }
            console.log("onLoadSearchTerm", onLoadSearchTerm);
            let response;

            if (!!onLoadSearchTerm?.length) {
              response = await onLoadCall(SDK, onLoadSearchTerm, {
                page: paginationConfig.current,
                pageSize: paginationConfig.pageSize,
              });
            }
            // Do API Call
            if (
              schema.type === "SEARCH_BY_FIELDS_SELECTOR" ||
              schema.type === "SIMPLE_SEARCH_SELECTOR"
            ) {
              if (onLoadSearchTerm === "" && !searchTerm) {
                res([]);
                return;
              }
            }

            response = await resourceCall(SDK, searchTerm, {
              page: paginationConfig.current,
              pageSize: paginationConfig.pageSize,
            });

            // Process Data

            const data = response
              ? transformFunction
                ? transformFunction(response)
                : response || []
              : [];
            console.log("data :", data);

            if (enableRemotePagination) {
              // If Pagination is enabled, set Pagintion Config
              setPaginationConfig({
                ...paginationConfig,
                // Todo: Assumes that all pagination works the same way
                total: response.totalElements,
                current: response.pageable.pageNumber + 1,
              });
              console.log("data", data.content);
              res(data.content);
            } else {
              setPaginationConfig({
                ...paginationConfig,
                total: 1,
                current: 1,
              });
              res(data);
            }
          } catch (e) {
            console.log("Error while fetching data", e);
            res([]);
          }
        };
        async();
      }),
    [onLoadSearchTerm, searchKey, searchTrigger, paginationConfig.current],
    false,
    []
  );
  let columns;
  if (!onRowSelection) {
    columns = GenerateColumnDefinitions(schema.tableSchema, [
      {
        name: "Select",
        onClick: (record) => onResourceSelected && onResourceSelected(record),
      },
    ]);
  } else {
    columns = GenerateColumnDefinitions(schema.tableSchema);
  }

  const dataSource = React.useMemo(
    () => data.map((item, index) => ({ key: index.toString(), ...item })),
    [data]
  );

  const selectAfter = schema.type === "SEARCH_BY_FIELDS_SELECTOR" && (
    <Select
      style={{ width: 280 }}
      value={searchKey}
      onChange={(key: any) => setSearchKey(key)}
    >
      {schema.searchSchema!.fields.map((field) => (
        <Select.Option value={field.id} key={field.id}>
          {field.label}
        </Select.Option>
      ))}
    </Select>
  );

  return (
    <Modal
      title={schema.title}
      visible={isVisible}
      onCancel={onCancel}
      footer={null}
      bodyStyle={{ padding: 0, borderRadius: "5rem" }}
      className="relative w-3/4 overflow-hidden rounded-lg border bg-white pb-0"
      centered={true}
    >
      <div
        className="relative bg-white flex flex-col"
        style={{ minHeight: 500 }}
      >
        <div className="pl-4 pr-4 p-2" style={{ background: "#F8F8F8" }}>
          <div className="flex flex-1 flex-row my-4 mx-2">
            <Input
              placeholder="Search..."
              addonAfter={selectAfter}
              // enterButton="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              // onPressEnter
              // loading={false}
              onPressEnter={() => {
                setSearchTrigger(searchTrigger + 1);
              }}
              // suffix={<Button>Search</Button>}
            />
          </div>
        </div>
        {!onLoadSearchTerm?.length ? (
          searchTerm === "" || searchTrigger === 0 ? (
            <div className="flex justify-center align-middle mt-8">
              <Alert
                message="Type in a keyword, Select Search type and then press search to begin searching"
                type="info"
              />
            </div>
          ) : (
            <div className="relative fill flex flex-col">
              <Table
                className="relative fill"
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={false}
              />
              <div className="flex-row flex justify-end items-center p-4">
                <Pagination
                  defaultCurrent={1}
                  onChange={onPaginationChange}
                  {...paginationConfig}
                />
              </div>
            </div>
          )
        ) : (
          <div className="relative fill flex flex-col">
            {schema.rowSelection ? (
              <Table
                rowSelection={{
                  onChange: onRowSelection && onRowSelection,
                }}
                className="relative fill"
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={false}
              />
            ) : (
              <Table
                className="relative fill"
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={false}
              />
            )}

            <div className="flex-row flex justify-end items-center p-4">
              <Pagination
                defaultCurrent={1}
                onChange={onPaginationChange}
                {...paginationConfig}
              />
            </div>
          </div>
        )}
        {onOk && (
          <div className="flex flex-1 flex-row justify-end p-2">
            <Button
              style={{ width: 200 }}
              type="primary"
              onClick={() => onOk()}
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};
