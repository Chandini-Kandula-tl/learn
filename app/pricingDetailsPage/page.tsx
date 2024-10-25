"use client";

import { DataType } from "../interfaces";
import PricingDetails from "../components/pricingDetails";

const data: DataType[] = [
  {
    description: "System Price",
    price: "2,67,191",
    gst: "36,154",
    total: "2,98,141",
    key: "1",
  },
  {
    description: "Additional cost",
    price: "25,000",
    gst: "4,500",
    total: "29,500",
    key: "2",
  },
  {
    description: "Additional Po cost",
    price: "0",
    gst: "0",
    total: "0",
    key: "3",
  },
];

const summaryData: DataType[] = [
  {
    key: "9",
    description: "Discount",
    price: "2,86,987",
    gst: "36,154",
    total: "2,86,987",
  },
  {
    key: "10",
    description: "Subsidy",
    price: "2,86,987",
    gst: "36,154",
    total: "2,86,987",
  },
];

const footerData: DataType[] = [
  {
    key: "11",
    description: "Total Price",
    price: "2,86,987",
    gst: "36,154",
    total: "2,86,987",
  },
  {
    key: "12",
    description: "Effective cost to customise",
    price: "2,86,987",
    gst: "36,154",
    total: "2,86,987",
  },
];

const Page = () => {
  return (
    <PricingDetails
      data={data}
      footerData={footerData}
      summaryData={summaryData}
    />
  );
};

export default Page;
