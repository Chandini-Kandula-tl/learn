import React from "react";
import { DataType } from "../interfaces";
import { Table } from "antd";
const { Cell, Row } = Table.Summary;
interface TableSummaryProps {
  summaryData: DataType[];
  footerData: DataType[];
}

interface TableSectionProps {
  item: DataType;
  className?: string;
}

const TableSection = ({ item, className }: TableSectionProps) => {
  return (
    <Row key={item.key} className={className}>
      <Cell index={0}>{item.description}</Cell>
      <Cell index={1}>{item.price}</Cell>
      <Cell index={2}>{item.gst}</Cell>
      <Cell index={3}>{item.total}</Cell>
    </Row>
  );
};

const TableSummary = ({ summaryData, footerData }: TableSummaryProps) => {
  return (
    <>
      {summaryData.map((item, index) => (
        <TableSection
          item={item}
          key={item.key}
          className={index === 0 ? "border-t-2 border-black" : ""}
        />
      ))}

      {footerData.map((item) => (
        <TableSection
          item={item}
          key={item.key}
          className={item.description === "Total Price" ? "font-bold" : ""}
        />
      ))}
    </>
  );
};

export default TableSummary;
