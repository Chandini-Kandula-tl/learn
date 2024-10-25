"use client";
import {
  Button,
  Divider,
  Form,
  Input,
  message,
  Row,
  Select,
  SelectProps,
  Typography,
} from "antd";

import { useMemo } from "react";
import MyFormItem from "../components/formItem";
const { Text } = Typography;
const { Item: FormItem, useWatch } = Form;

type BasicInfoType = {
  projectName: string;
  projectType: string;
  bill: number;
  pinCode: number;
  state: string;
  city: string;
};

type MoreInfoType = {
  proposedSystem: string;
  phase: string;
  averageBill: number;
  consumedUnits: number;
  roofArea: number;
  roofType: string;
  load: number;
  phase_2: string;
  financeType: string;
  siteUnderConstruction: boolean;
  completionTime?: number;
};

type FieldType = {
  basicInfo: BasicInfoType;
  moreInfo: MoreInfoType;
};

interface DropDownOptionProps {
  label: string;
  value: boolean;
}

type SelectOptions = SelectProps["options"];

const projectTypes: SelectOptions = [
  { label: "Commercial", value: "commercial" },
  { label: "Chatered", value: "chatered" },
];

const servicableStates = [
  {
    label: "AP",
    value: "ap",
    cities: [
      { label: "Vizag", value: "vizag" },
      { label: "Skml", value: "skml" },
      { label: "VZM", value: "vzm" },
    ],
  },
  {
    label: "UP",
    value: "up",
    cities: [
      { label: "Lucknow", value: "lucknow" },
      { label: "Kanpur", value: "kanpur" },
    ],
  },
  {
    label: "MP",
    value: "mp",
    cities: [
      { label: "Bhopal", value: "bhopal" },
      { label: "Indore", value: "indore" },
    ],
  },
];

const phases: SelectOptions = [
  { label: "Single Phase", value: "single_phase" },
  { label: "Double Phase", value: "double_phase" },
  { label: "Triple Phase", value: "triple_phase" },
];

const roofType: SelectOptions = [
  { label: "Flat type", value: "flat_type" },
  { label: "Slope type", value: "slope_type" },
];

const financeSelectionType: SelectOptions = [
  {
    label: "Yes",
    value: "yes",
  },
  { label: "No", value: "no" },
];

const siteUnderConstructionTypes: DropDownOptionProps[] = [
  {
    label: "Yes",
    value: true,
  },
  { label: "No", value: false },
];

const FormPage = () => {
  const [form] = Form.useForm();
  const siteUnderConstructionValue = useWatch(
    ["moreInfo", 0, "siteUnderConstruction"],
    form
  );
  const selectedState = useWatch(["basicInfo", 0, "state"], form);

  const cities = useMemo(() => {
    const id = setTimeout(() => {
      const selectedCity = form.getFieldValue(["basicInfo", 0, "city"]);
      const isSame = servicableStates
        .find(({ value }) => value === selectedState)
        ?.cities.some(({ value }) => value === selectedCity);
      if (isSame === false) {
        form.setFieldValue(["basicInfo", 0, "city"], undefined);
      }
      clearTimeout(id);
    }, 100);
    return (
      servicableStates.find(({ value }) => value === selectedState)?.cities ??
      []
    );
  }, [form, selectedState]);

  const onFinish = (values: FieldType) => {
    const { basicInfo, moreInfo } = values;
    console.log(basicInfo, moreInfo, "values");
    message.success("Form submitted successfully");
    form?.resetFields();
  };

  return (
    <Form<FieldType>
      initialValues={{
        basicInfo: [
          {
            projectName: "Solar Project",
            projectType: "commercial",
            bill: 1000,
            pinCode: 123456,
            state: "ap",
            city: "vizag",
          },
        ],
        moreInfo: [
          {
            proposedSystem: "Solar PV",
            phase: "single_phase",
            averageBill: 500,
            consumedUnits: 200,
            roofArea: 100,
          },
        ],
      }}
      onFinish={onFinish}
      form={form}
      autoComplete="off"
      layout="vertical"
      className="m-3"
    >
      <Text className="font-bold text-lg ">Basic Info</Text>
      <Divider />
      <Form.List name="basicInfo">
        {(fields) => (
          <>
            {fields.map((field) => (
              <Row gutter={24} key={field.key}>
                <MyFormItem
                  label="Project Name"
                  name={[field.name, "projectName"]}
                  rules={[
                    { required: true, message: "Please enter project name" },
                  ]}
                >
                  <Input placeholder="Project name" type="text" />
                </MyFormItem>
                <MyFormItem
                  label="Project Type"
                  name={[field.name, "projectType"]}
                  rules={[
                    { required: true, message: "Please select project type" },
                  ]}
                >
                  <Select options={projectTypes} />
                </MyFormItem>
                <MyFormItem
                  label="Range of Electricity Bill"
                  name={[field.name, "bill"]}
                  rules={[
                    {
                      required: true,
                      message: "Please enter electricity bill",
                    },
                  ]}
                >
                  <Input placeholder="Electricity bill" type="number" min={1} />
                </MyFormItem>

                <MyFormItem
                  label="Pincode"
                  name={[field.name, "pinCode"]}
                  validateDebounce={1000}
                  rules={[
                    {
                      pattern: /^\d{6}$/,
                      message: "Pincode must be exactly 6 digits",
                    },
                  ]}
                >
                  <Input placeholder="Pin code" type="number" min={1} />
                </MyFormItem>
                <MyFormItem
                  label="Servicable State"
                  name={[field.name, "state"]}
                  rules={[{ required: true, message: "Please select state" }]}
                >
                  <Select options={servicableStates} />
                </MyFormItem>
                <MyFormItem
                  label="Servicable City"
                  name={[field.name, "city"]}
                  // rules={[{ required: true, message: "Please select city" }]}
                >
                  <Select options={cities} />
                </MyFormItem>
              </Row>
            ))}
          </>
        )}
      </Form.List>

      <Text className="mt-3 font-bold text-lg">More Info</Text>
      <Divider />
      <Form.List name="moreInfo">
        {(fields) => (
          <>
            {fields.map((field) => (
              <Row gutter={24} key={field.key}>
                <MyFormItem
                  label="Proposed System"
                  name={[field.name, "proposedSystem"]}
                  rules={[
                    { required: true, message: "Please enter project name" },
                  ]}
                >
                  <Input placeholder="Enter Proposed System" type="text" />
                </MyFormItem>
                <MyFormItem
                  label="Phase"
                  name={[field.name, "phase"]}
                  rules={[{ required: true, message: "please, select phase" }]}
                >
                  <Select options={phases}></Select>
                </MyFormItem>
                <MyFormItem
                  label="Average Electricity Bill"
                  name={[field.name, "averageBill"]}
                  rules={[{ required: true, message: "Enter electicity bill" }]}
                >
                  <Input
                    type="number"
                    placeholder="Electricity bill in ruppees"
                    addonAfter="RS"
                    min={1}
                  />
                </MyFormItem>
                <MyFormItem
                  label="Units Consumed/Month"
                  name={[field.name, "consumedUnits"]}
                  rules={[
                    { required: true, message: "Enter the units consumed" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Units Consumed"
                    addonAfter="Wh"
                    min={1}
                  />
                </MyFormItem>
                <MyFormItem
                  label="Roof tpye"
                  name={[field.name, "roofType"]}
                  rules={[{ required: true, message: "Select roof type" }]}
                >
                  <Select options={roofType}></Select>
                </MyFormItem>
                <MyFormItem
                  label="Contract Load"
                  name={[field.name, "load"]}
                  rules={[{ required: true, message: "Enter load" }]}
                >
                  <Input
                    type="number"
                    placeholder="Contract load"
                    addonAfter="KW"
                    min={1}
                  />
                </MyFormItem>
                <MyFormItem
                  label="Phase"
                  name={[field.name, "phase_2"]}
                  rules={[{ required: true, message: "Please, select phase" }]}
                >
                  <Select placeholder="select phase" options={phases} />
                </MyFormItem>
                <MyFormItem
                  label="Interested in Finance?"
                  name={[field.name, "financeType"]}
                  rules={[
                    { required: true, message: "Please, select finance type" },
                  ]}
                >
                  <Select options={financeSelectionType}></Select>
                </MyFormItem>
                <MyFormItem
                  label="Site Under Construction"
                  name={[field.name, "siteUnderConstruction"]}
                  rules={[{ required: true, message: "Please, select type" }]}
                >
                  <Select options={siteUnderConstructionTypes}></Select>
                </MyFormItem>
                {siteUnderConstructionValue && (
                  <MyFormItem
                    label="Construction completion time"
                    name="completionTime"
                    rules={[
                      {
                        required: true,
                        message: "Please, enter completion time",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Enter completion time"
                      min={1}
                    />
                  </MyFormItem>
                )}
              </Row>
            ))}
          </>
        )}
      </Form.List>
      <FormItem>
        <Button className="mt-3 float-right" type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  );
};

export default FormPage;
