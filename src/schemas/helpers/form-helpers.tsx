import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
  Upload,
} from "antd";
import { FormInstance } from "antd/lib/form";
import classNames from "classnames";
import _ from "lodash";
import moment from "moment";
import React, { useEffect } from "react";
import { P } from "../../containers/atoms/typography";
import { assets } from "../../ui-helpers/assets";
import { useGetSDK, useSDK } from "../../utils/hooks/useSDK";
import { FormItemSchema } from "../form-schema";

const StyledFormItem = (props: any) => {
  return (
    <>
      {props.type !== "CHECKBOX" && (
        <P className="text-xs" color={assets.color.text_gray}>
          {props.label}
        </P>
      )}

      <Form.Item {...props} label="">
        {props.children}
      </Form.Item>
    </>
  );
};

const HiddenFormItem = ({ name }: { name: string }) => {
  return (
    <Form.Item hidden={true} name={name} style={{ display: "none" }}>
      <Input disabled={true} />
    </Form.Item>
  );
};

const RemoteSelectFormField = ({
  schema,
  form,
  onExtraFieldMapped,
}: {
  schema: FormItemSchema;
  form: FormInstance;
  onExtraFieldMapped?: () => any;
}) => {
  const getCall = schema.spec?.api!;
  const currentFormValue = form.getFieldsValue() || {};
  const parameters = (schema.spec?.parameters || []).map(
    (key) => currentFormValue[key]
  );

  const { data, loading } = useSDK<any[]>(
    (SDK) => {
      if (getCall) {
        return getCall(SDK)(...parameters);
      } else {
        return [];
      }
    },
    [...parameters],
    false,
    []
  );
  // transformFunction
  const transformedData: any[] = !loading
    ? schema.spec?.transformFunction
      ? schema.spec?.transformFunction(data)
      : data || []
    : [];

  const values = transformedData?.map((obj) => ({
    value: obj[schema.spec?.value!],
    label:
      typeof schema.spec?.label! === "string"
        ? obj[schema.spec?.label!]
        : schema.spec?.label!(obj),
  }));

  const onSelect = (id: string, firstLoad?: boolean) => {
    //* Note: Not Tested Yet
    if (schema.spec?.extraFieldMappings) {
      const selectedValue: any = _.find(transformedData, {
        [schema.spec?.value!]: id,
      });
      if (selectedValue) {
        const extraMapping: any = {};
        for (const mapping of schema.spec?.extraFieldMappings) {
          const value =
            typeof mapping.value! === "string"
              ? selectedValue[mapping.value as any]
              : mapping.value(selectedValue);
          extraMapping[mapping.key] = value;
        }
        const newFormVaue = {
          ...form.getFieldsValue(),
          ...extraMapping,
        };
        form.setFieldsValue(newFormVaue);
        onExtraFieldMapped && onExtraFieldMapped();
      }
    }
    if (schema.spec?.onChangeResetFields && !firstLoad) {
      const fieldsToReset: any = {};
      for (const field of schema.spec?.onChangeResetFields) {
        fieldsToReset[field] = undefined;
      }
      const newFormVaue = {
        ...form.getFieldsValue(),
        ...fieldsToReset,
      };
      form.setFieldsValue(newFormVaue);
      onExtraFieldMapped && onExtraFieldMapped();
    }
  };

  useEffect(() => {
    if (currentFormValue && currentFormValue[schema.key!] && !loading) {
      setTimeout(() => {
        onSelect(currentFormValue[schema.key!], true);
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  return (
    <>
      <StyledFormItem
        name={schema.key}
        label={schema.label}
        rules={schema.rules}
        type={schema.type}
      >
        <Select
          loading={loading}
          onSelect={(val) => onSelect(val as any)}
          disabled={schema.readOnly}
        >
          {values?.map((option, index) => (
            <Select.Option value={option.value} key={index.toString()}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </StyledFormItem>
      {(schema.spec?.extraFieldMappings || []).map((extraField, index) => (
        <HiddenFormItem name={extraField.key} key={index.toString()} />
      ))}
    </>
  );
};

export const FormField = ({
  fieldSchema, // Single Field
  form,
  globalFormState,
  onExtraFieldMapped,
}: {
  fieldSchema: FormItemSchema;
  form: FormInstance;
  globalFormState?: any;
  onExtraFieldMapped?: () => any;
}) => {
  const sdk = useGetSDK();
  useEffect(() => {
    let defaultValue = fieldSchema.defaultValue;
    if (defaultValue) {
      if (typeof defaultValue === "function") {
        let args: any[] = [];
        if (fieldSchema.defaultValueParameters) {
          args = fieldSchema.defaultValueParameters.map(
            (key) => globalFormState[key]
          );
        }
        defaultValue(sdk, ...args) // get by sdk
          .then((data: any) => {
            if (data) {
              form.setFieldsValue({
                ...form.getFieldsValue(),
                [fieldSchema.key!]: data,
              });
              onExtraFieldMapped && onExtraFieldMapped();
            }
          })
          .catch((e: any) => {
            console.log("Error while retrieving the value", e);
          });
      } else {
        form.setFieldsValue({
          ...form.getFieldsValue(),
          [fieldSchema.key!]: defaultValue,
        });
        onExtraFieldMapped && onExtraFieldMapped();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fieldSchema.defaultValue,
    fieldSchema.defaultValueParameters,
    fieldSchema.key,
    form,
    sdk,
  ]);
  // console.log("fieldSchema", fieldSchema);

  // Patch for Date fields - Start
  let hideDatePicker = false;
  const currentFormValue = form.getFieldsValue();
  const currentValue = currentFormValue[fieldSchema.key!];
  if (fieldSchema.type === "DATE") {
  }
  if (
    !currentValue ||
    (currentValue && typeof currentValue.clone === "undefined")
  ) {
    // console.log("Patch Applied");
    hideDatePicker = true;
  }

  useEffect(() => {
    if (fieldSchema.type === "DATE") {
      const currentFormValue = form.getFieldsValue();
      const currentValue = currentFormValue[fieldSchema.key!];
      if (
        !currentValue ||
        (currentValue && typeof currentValue.clone === "undefined")
      ) {
        form.setFieldsValue({
          ...currentFormValue,
          [fieldSchema.key!]: moment(currentValue || undefined),
        });
        onExtraFieldMapped && onExtraFieldMapped();
      }
    }
  }, [fieldSchema.key, fieldSchema.type, form, onExtraFieldMapped]);
  // Patch for Date fields - End

  return (
    <>
      {fieldSchema.type !== "REMOTE_SELECT" && fieldSchema.type !== "CUSTOM" && (
        <StyledFormItem
          name={fieldSchema.key}
          label={fieldSchema.label}
          rules={fieldSchema.rules}
          type={fieldSchema.type}
        >
          {// TEXT_STRING
          fieldSchema.type === "TEXT_STRING" ? (
            <Input disabled={fieldSchema.readOnly} />
          ) : // TEXTAREA
          fieldSchema.type === "TEXTAREA" ? (
            <Input.TextArea disabled={fieldSchema.readOnly} />
          ) : // SELECT
          fieldSchema.type === "SELECT" ? (
            <Select disabled={fieldSchema.readOnly}>
              {fieldSchema.values?.map((option: any, index) => (
                <Select.Option value={option.value} key={index.toString()}>
                  {typeof option.label === "function"
                    ? option.label(option)
                    : option.label}
                </Select.Option>
              ))}
            </Select>
          ) : // NUMBER
          fieldSchema.type === "DATE" ? (
            hideDatePicker ? (
              <Input disabled={fieldSchema.readOnly} />
            ) : fieldSchema.disablePreviousDates ? (
              <DatePicker
                disabledDate={(current) => {
                  return current && current < moment().startOf("day");
                }}
                disabled={fieldSchema.readOnly}
                format={fieldSchema.format}
              />
            ) : (
              <DatePicker
                disabled={fieldSchema.readOnly}
                format={fieldSchema.format}
              />
            )
          ) : fieldSchema.type === "NUMBER" ? (
            <InputNumber
              disabled={fieldSchema.readOnly}
              step={fieldSchema.step}
            />
          ) : // CHECKBOX
          fieldSchema.type === "CHECKBOX" ? (
            <Checkbox
              disabled={fieldSchema.readOnly}
              checked={
                form.getFieldsValue()[fieldSchema.key!] ===
                (fieldSchema.valueMap ? fieldSchema.valueMap.true : true)
              }
              onChange={(e) => {
                form.setFieldsValue({
                  ...form.getFieldsValue(),
                  [fieldSchema.key!]: e.target.checked
                    ? fieldSchema.valueMap
                      ? fieldSchema.valueMap.true
                      : true
                    : fieldSchema.valueMap
                    ? fieldSchema.valueMap.false
                    : false,
                });
                onExtraFieldMapped && onExtraFieldMapped();
              }}
            >
              {fieldSchema.label}
            </Checkbox>
          ) : fieldSchema.type === "SWITCH" ? (
            <Switch
              disabled={fieldSchema.readOnly}
              checked={
                form.getFieldsValue()[fieldSchema.key!] ===
                (fieldSchema.valueMap ? fieldSchema.valueMap.true : true)
              }
              onChange={(e) => {
                form.setFieldsValue({
                  ...form.getFieldsValue(),
                  [fieldSchema.key!]: e
                    ? fieldSchema.valueMap
                      ? fieldSchema.valueMap.true
                      : true
                    : fieldSchema.valueMap
                    ? fieldSchema.valueMap.false
                    : false,
                });
                onExtraFieldMapped && onExtraFieldMapped();
              }}
            />
          ) : fieldSchema.type === "FILE_UPLOAD" ? (
            // !!TODO NOT TESTED
            <Upload
              name="logo"
              action={fieldSchema.uploadSpec?.action}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          ) : fieldSchema.type === "FILE_DROPPER" ? (
            // !!TODO NOT TESTED
            <Upload.Dragger
              name="files"
              action={fieldSchema.uploadSpec?.action}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          ) : (
            <div>Unknown Input</div>
          )}
        </StyledFormItem>
      )}

      {fieldSchema.type === "CUSTOM" && fieldSchema.customElement && (
        <>
          <StyledFormItem
            name={fieldSchema.key}
            label={fieldSchema.label}
            rules={fieldSchema.rules}
            type={fieldSchema.type}
          >
            <fieldSchema.customElement
              schema={fieldSchema}
              form={form}
              formState={globalFormState}
              onExtraFieldMapped={onExtraFieldMapped}
            />
          </StyledFormItem>
        </>
      )}

      {fieldSchema.type === "REMOTE_SELECT" && (
        <RemoteSelectFormField
          schema={fieldSchema}
          form={form}
          onExtraFieldMapped={onExtraFieldMapped}
        />
      )}
    </>
  );
};

export const FormFields = ({
  schema, //Array of Field
  form,
  globalFormState = {},
  onExtraFieldMapped,
}: {
  schema: FormItemSchema[];
  form: FormInstance;
  globalFormState?: any;
  onExtraFieldMapped?: () => any;
}) => {
  return (
    <>
      {schema.map((fieldSchema, index) => (
        // TITLE
        <React.Fragment key={index.toString()}>
          {fieldSchema.type === "TITLE" ? (
            <P
              className={classNames([
                {
                  "text-x font-semibold": !fieldSchema.class,
                },
                fieldSchema.class,
              ])}
            >
              {fieldSchema.body}
            </P>
          ) : // DESCRIPTION
          fieldSchema.type === "DESCRIPTION" ? (
            <P
              className={classNames([
                {
                  "py-4 text-xs": !fieldSchema.class,
                },
                fieldSchema.class,
              ])}
            >
              {fieldSchema.body}
            </P>
          ) : // FORM_ROW
          fieldSchema.type === "FORM_ROW" ? (
            <Space style={{ display: "flex", marginBottom: 8 }} align="start">
              {fieldSchema.fields?.map(
                (subFieldSchema) =>
                  (!subFieldSchema.displayCondition ||
                    subFieldSchema.displayCondition(
                      globalFormState,
                      globalFormState
                    )) && (
                    <FormField
                      fieldSchema={fieldSchema}
                      form={form}
                      globalFormState={globalFormState}
                      onExtraFieldMapped={onExtraFieldMapped}
                    />
                  )
              )}
            </Space>
          ) : (
            (!fieldSchema.displayCondition ||
              fieldSchema.displayCondition(
                globalFormState,
                globalFormState
              )) && (
              <FormField
                fieldSchema={fieldSchema}
                form={form}
                globalFormState={globalFormState}
                onExtraFieldMapped={onExtraFieldMapped}
              />
            )
          )}
        </React.Fragment>
      ))}
    </>
  );
};
