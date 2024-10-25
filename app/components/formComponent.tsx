"use client";
import React from "react";
import { Divider, Row, Typography, Input, Form, Select } from "antd";
import MyFormItem from "./formItem"; // Ensure MyFormItem is correctly set up
const { Text } = Typography;

interface FormComponentProps {
  sectionTitle: string;
}

interface FieldType {
  label: string;
  name: string;
  required: string;
  message?: string;
  type: "input" | "select";
  options?: { label: string; value: string }[];
}

const data: FieldType[][] = [
  [
    {
      label: "Project Name",
      name: "projectName",
      required: "false",
      type: "input",
    },
    {
      label: "Project Type",
      name: "projectType",
      required: "true",
      type: "input",
    },
    {
      label: "Electricity Bill",
      name: "bill",
      required: "true",
      type: "input",
    },
    {
      label: "Pincode",
      name: "pinCode",
      required: "true",
      type: "input",
    },
  ],
  [
    {
      label: "Electricity Bill",
      name: "bill",
      required: "true",
      type: "select",
      options: [
        { label: "Flat type", value: "flat_type" },
        { label: "Slope type", value: "slope_type" },
      ],
    },
    {
      label: "Pincode",
      name: "pinCode",
      required: "true",
      type: "input",
    },
  ],
];

const FormComponent = ({ sectionTitle }: FormComponentProps) => {
  return (
    <>
      <Text className="font-bold text-lg">{sectionTitle}</Text>
      <Divider />
      <Form layout="vertical">
        {data.map((row, rowIndex) => (
          <Row gutter={24} key={rowIndex}>
            {row.map((field, fieldIndex) => (
              <MyFormItem
                key={fieldIndex}
                label={field.label}
                name={field.name}
                rules={[
                  {
                    required: field.required === "true",
                    message: field.message,
                  },
                ]}
              >
                {field.type === "input" ? (
                  <Input placeholder={`Enter ${field.label}`} />
                ) : (
                  <Select
                    placeholder={`Select ${field.label}`}
                    options={field.options}
                  />
                )}
              </MyFormItem>
            ))}
          </Row>
        ))}
      </Form>
    </>
  );
};

export default FormComponent;
