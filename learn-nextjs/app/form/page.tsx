"use client";
import { Form, Input, InputRef, Radio, Select, Space } from "antd";
import { useCallback, useRef, useState } from "react";
import PopConfirmComponent, {
  PopConfirmComponentProps,
} from "../components/popConfirm";
import { useAvailableSystems } from "../hooks/availableSystem";
import { IPhase } from "../interfaces/interface";
const { Item: FormItem } = Form;

const Page = () => {
  const [form] = Form.useForm();
  const inputRef = useRef<InputRef>(null);
  const { availableSystems, minMaxCheck } = useAvailableSystems();
  const [selectOptions, setSelectOptions] = useState<IPhase[]>([]);
  const [confirmationPopUp, setConfirmationPopoup] = useState<boolean>(false);
  // const [confirmationMessage, setConfirmationMessage] = useState<string>("");
  const [pendingSystemSize, setPendingSystemSize] = useState<string>("");
  const [type, setType] = useState<PopConfirmComponentProps["type"]>("minimum");
  const options = useRef<IPhase[]>([]);

  const confirm = useCallback(() => {
    if (pendingSystemSize.length !== 0) {
      form.setFieldsValue({ systemSize: pendingSystemSize });
      setSelectOptions(options.current);
      options.current = [];
      setPendingSystemSize("");
      inputRef.current?.blur();
    } else {
      if (form.getFieldValue("phaseSize")) {
        form.setFieldsValue({ phaseSize: "" });
        inputRef.current?.focus();
        setSelectOptions([]);
      }
    }
    setConfirmationPopoup(false);
  }, [form, pendingSystemSize]);

  const cancel = useCallback(() => {
    if (form.getFieldValue("phaseSize")) {
      inputRef.current?.blur();
    } else {
      form.setFieldsValue({ systemSize: "" });
      inputRef.current?.focus();
    }
    setConfirmationPopoup(false);
  }, [form]);

  const validateInput = (value: string) => {
    const inputValue = parseFloat(value);
    if (isNaN(inputValue)) return;
    const {
      confirmationPopup,
      // confirmationMessage,
      pendingSystemSize,
      phases,
      type,
    } = minMaxCheck(inputValue);
    console.log(typeof type);
    if (confirmationPopup) {
      setPendingSystemSize(pendingSystemSize);
      setConfirmationPopoup(true);
      setType(type);
      // setConfirmationMessage(confirmationMessage);
      // setSelectOptions(phases);
      options.current = phases;
    } else {
      const closestMatch = availableSystems.reduce((prev, curr) => {
        return Math.abs(curr.systemSize - inputValue) <
          Math.abs(prev.systemSize - inputValue)
          ? curr
          : prev;
      });
      form.setFieldsValue({ systemSize: closestMatch.systemSize });
      setSelectOptions(closestMatch.phases);
    }
  };

  const handleInputClick = (e: React.MouseEvent) => {
    if (form.getFieldValue("phaseSize")) {
      e.preventDefault();
      setConfirmationPopoup(true);
      setType("update");
      // setConfirmationMessage("");
    }
  };

  const handleInput = () => {
    setSelectOptions([]);
    if (inputRef.current?.input?.value) {
      validateInput(inputRef.current.input.value);
    }
  };

  // const description = useMemo(() => {
  //   return confirmationMessage.length === 0
  //     ? "Updating system size will change the phase!! Are you sure?"
  //     : confirmationMessage;
  // }, [confirmationMessage]);

  return (
    <Form
      form={form}
      // initialValues={{ systemSize: 1.2345 }}
      layout="vertical"
    >
      {/* <Popconfirm
        title="Confirmatin of system size requirement"
        description={description}
        okText="Yes"
        cancelText="NO"
        open={confirmationPopUp}
        onConfirm={confirm}
        onCancel={cancel}
      >
        <FormItem label="System size" name="systemSize">
          <Input
            type="number"
            ref={inputRef}
            onMouseDown={handleInputClick}
            onBlur={handleInput}
          />
        </FormItem>
      </Popconfirm> */}
      <Space>
        <FormItem label="Roof Type" name={"flatRoof"}>
          <Radio>Flat Roof</Radio>
        </FormItem>
        <FormItem label="Roof Type" name={"slopeRoof"}>
          <Radio>Slope Roof</Radio>
        </FormItem>
      </Space>
      <FormItem label="Project Name">
        <Input />
      </FormItem>
      <FormItem label="Site under construction">
        <Select options={selectOptions} />
      </FormItem>
      <PopConfirmComponent
        type={type}
        onConfirm={confirm}
        onCancel={cancel}
        open={confirmationPopUp}
      >
        <FormItem label="System size" name="systemSize">
          <Input
            type="number"
            ref={inputRef}
            onMouseDown={handleInputClick}
            onBlur={handleInput}
          />
        </FormItem>
      </PopConfirmComponent>
      <FormItem label="Phase size" name="phaseSize">
        <Select className="lg:w-96 md:40" options={selectOptions} />
      </FormItem>
      <ol>
        {availableSystems
          .sort((a, b) => a.systemSize - b.systemSize)
          .map(({ systemSize, phases }, index) => {
            return (
              <li key={index}>
                System Size: {systemSize}
                <br />
                Phases: {phases.map(({ value }) => value).join(", ")}
                <hr />
              </li>
            );
          })}
      </ol>
    </Form>
  );
};

export default Page;
