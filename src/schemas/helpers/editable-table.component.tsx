import { Form, Table } from "antd";
import React, { useContext, useEffect, useMemo } from "react";
import { EditableColumnSchema } from "../table-schema";
import { FormField } from "./form-helpers";
import { GenerateColumnDefinitions } from "./generate-column-definition";

const EditableContext = React.createContext<any>(undefined);

interface EditableRowProps {
  onRecordChange: (record: any, index: number) => any;
  record: any;
  rowIndex: number;
}

const EditableRow: React.FC<EditableRowProps> = ({
  onRecordChange,
  record,
  rowIndex,
  ...props
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    setTimeout(() => {
      form.setFieldsValue(record);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [record]);
  return (
    <Form
      form={form}
      component={false}
      onValuesChange={(e) => {
        onRecordChange({ ...record, ...form.getFieldsValue() }, rowIndex);
      }}
    >
      <EditableContext.Provider
        value={{
          form,
          onExtraFieldMapped: () =>
            onRecordChange({ ...record, ...form.getFieldsValue() }, rowIndex),
        }}
      >
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps<T> extends EditableColumnSchema {
  dataIndex: string;
  record: T;
}

const EditableCell: React.FC<EditableCellProps<any>> = ({
  children,
  dataIndex,
  isEditable,
  widgetSchema,
  record,
  ...restProps
}) => {
  const { form, onExtraFieldMapped } = useContext(EditableContext);
  let childNode = children;
  if (isEditable) {
    childNode = (
      <FormField
        fieldSchema={widgetSchema as any}
        form={form}
        onExtraFieldMapped={onExtraFieldMapped}
      />
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export interface TableRowAction<T> {
  name: string;
  onClick: (record: T) => any;
  isDisabled?: boolean;
}

export const EditableTableView = <T extends unknown>({
  data,
  schema,
  actions,
  onValueChange,
}: {
  data: T[];
  schema: EditableColumnSchema[];
  actions: TableRowAction<T>[];
  onValueChange: (data: T[]) => any;
}) => {
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const onRecordChange = (record: T, index: number) => {
    console.log("records", record, index);
    const values = [...data];
    values[index] = { ...(values[index] as any), ...((record || {}) as any) };

    onValueChange(values);
  };

  // Add widgetSchema.key prop if key is present in the column definition
  const schemaWithEditableWidgetKeys = useMemo(
    () =>
      schema.map((_ele) => {
        const ele = { ..._ele };
        if (ele.widgetSchema && ele.key) {
          ele.widgetSchema.key = ele.key;
        }
        return ele;
      }),
    [schema]
  );

  const columns = GenerateColumnDefinitions(
    schemaWithEditableWidgetKeys,
    actions
  ).map((col) => {
    if (!col.isEditable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: T) => ({
        record,
        ...col,
      }),
    };
  });

  return (
    <Table
      components={components}
      onRow={(record, rowIndex) => {
        return {
          onRecordChange,
          record,
          rowIndex,
        } as any;
      }}
      scroll={{
        x: "max-content",
      }}
      pagination={false}
      dataSource={data as any}
      columns={columns as any}
    />
  );
};
