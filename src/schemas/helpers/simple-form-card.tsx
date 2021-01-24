import { Form } from "antd";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { FormItemSchema } from "../form-schema";
import { FormCardTemplate } from "./form-card";
import { FormFields } from "./form-helpers";

const layout = {
  wrapperCol: { span: 12 },
};

export const SimpleFormCard = forwardRef(
  (
    {
      title,
      description,
      state,
      onChange,
      fields,
    }: {
      title: string;
      description?: string;
      state: any;
      onChange: (state: any) => any;
      fields: FormItemSchema[];
    },
    ref
  ) => {
    const [form] = Form.useForm();

    useImperativeHandle(ref, () => ({
      validate() {
        form
          .validateFields()
          .then((d) => {
            console.log("d", d);
          })
          .catch((e) => {
            console.log("e", e);
          });
        return form.getFieldsError();
      },
    }));

    const onComplete = useMemo(
      () => () => {
        console.log("On Complete");
      },
      []
    );

    useEffect(() => {
      form.setFieldsValue(state);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
      <FormCardTemplate title={title} description={description || ""}>
        <>
          <Form
            form={form}
            {...layout}
            name={title}
            initialValues={state}
            preserve={true}
            onFinish={onComplete}
            onValuesChange={() => {
              onChange(form.getFieldsValue());
            }}
          >
            <FormFields
              schema={fields}
              form={form}
              globalFormState={state}
              onExtraFieldMapped={() => onChange(form.getFieldsValue())}
            />
          </Form>
        </>
      </FormCardTemplate>
    );
  }
);
