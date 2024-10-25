"use client";
import { Button, Form, Input, Space, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, StoreDispatch } from "../store";
const { Item } = Form;
const { Text } = Typography;
const HomePage = () => {
  const router = useRouter();
  const dispatch: StoreDispatch = useDispatch();
  const text = useSelector((state: RootState) => state?.userText.value);
  const [input, setInput] = useState(text);
  const handleFinish = () => {
    // dispatch(setUserText(input));
    dispatch({ type: 'userText/setUserText', payload: input });

  };
  return (
    <Space direction="vertical">
      <Text className="">Home Page</Text>
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
          <Button onClick={() => router.push("/about")}>
            Navigate to next page
          </Button>
        </Space>
      </Form>
      <Space className="border border-black rounded-md p-2 w-auto h-auto min-w-5 min-h-5">
        {text}
      </Space>
    </Space>
  );
};

export default HomePage;
