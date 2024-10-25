import { Card, ConfigProvider, Space, Table, TableProps } from "antd";
import React from "react";
import TableSummary from "./tableSummary";
import { DataType } from "../interfaces";

interface PricingDetailsProps {
  data: DataType[];
  footerData: DataType[];
  summaryData: DataType[];
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price(INR)",
    dataIndex: "price",
    render: (value) => <Space>{`RS ${value}`}</Space>,
  },
  {
    title: "GST(INR)",
    dataIndex: "gst",
    render: (value) => <Space>{`RS ${value}`}</Space>,
  },
  {
    title: "Total(Inclusive of Taxes)",
    dataIndex: "total",
    render: (value) => <Space>{`RS ${value}`}</Space>,
  },
];

const PricingDetails = ({
  data,
  footerData,
  summaryData,
}: PricingDetailsProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "transparent",
            rowHoverBg: "transparent",
            borderColor: "transparent",
          },
        },
      }}
    >
      <Space className="block m-3">
        <Card title="Pricing Details">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            summary={() => (
              <TableSummary footerData={footerData} summaryData={summaryData} />
            )}
          />
        </Card>
      </Space>
    </ConfigProvider>
  );
};

export default PricingDetails;
