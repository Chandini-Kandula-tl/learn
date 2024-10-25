import { Col, Form, FormItemProps } from "antd";
import React from "react";
const { Item } = Form;
const MyFormItem = <T,>({
  span,
  children,
  ...props
}: FormItemProps<T> & { span?: number }) => {
  return (
    <Col span={span ?? 6}>
      <Item<T> {...props}>{children}</Item>
    </Col>
  );
};

export default MyFormItem;
