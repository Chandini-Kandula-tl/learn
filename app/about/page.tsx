"use client";
import { Button, Form, Input, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserText } from "../features/text/textSlice";
import { RootState, StoreDispatch } from "../store";
const { Text } = Typography;
const { Item } = Form;

const AboutPage = () => {
  const dispatch: StoreDispatch = useDispatch();
  const router = useRouter();
  const text = useSelector((state: RootState) => state?.userText.value);
  const [input, setInput] = useState(text);
  const handleFinish = () => {
    dispatch(setUserText(input));
  };
  return (
    <Space direction="vertical">
      <Text className="">About Page</Text>
      <Form onFinish={handleFinish}>
        <Item label="Enter your text here: ">
          <Input
            placeholder="enter text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button onClick={() => router.push("/homePage")}>
            Navigate to home page
          </Button>
        </Space>
      </Form>
      <Space className="border border-black rounded-md p-2 w-auto h-auto">
        {text}
      </Space>
    </Space>
  );
};

export default AboutPage;
