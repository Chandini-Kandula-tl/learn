"use client";
import { DownOutlined, PhoneFilled, RightOutlined } from "@ant-design/icons";
import {
  ConfigProvider,
  Space,
  Table,
  TableColumnsType,
  Tag,
  Typography,
} from "antd";
import { GoDotFill } from "react-icons/go";
const { Text } = Typography;
import dayjs from "dayjs";

interface DataSorceProps {
  key?: number;
  name: string;
  project_name: string;
  location: string;
  assigned_on: number;
  status: Status;
  priority: Priority;
}

function random(mn: number, mx: number) {
  return Math.floor(Math.random() * (mx - mn) + mn);
}

type Status = "New" | "Old";
type Priority = "Hot" | "Medium" | "Cold";

const dataSource: DataSorceProps[] = [];
const statuses: Status[] = ["New", "Old"];
const priorities: Priority[] = ["Hot", "Cold", "Medium"];
for (let i = 0; i < 50; i++) {
  const randomStatusIndex = random(0, statuses.length);
  const status = statuses[randomStatusIndex];
  const randomPriorityIndex = random(0, priorities.length);
  const priority = priorities[randomPriorityIndex];
  dataSource.push({
    name: `leadName ${i}`,
    project_name: `project ${i}`,
    location: `Visakhapatnam ${i}`,
    assigned_on: dayjs().subtract(i, "day").valueOf(),
    status,
    priority,
  });
}

// const dataSource: DataSorceProps[] = [
//   {
//     key: 1,
//     name: "Naresh",
//     project_name: "Naresh_home",
//     location: "Visakhapatnam",
//     assigned_on: 1728909262806,
//     status: "New",
//     priority: "Medium",
//     action: "Call",
//   },
//   {
//     key: 2,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909241109,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
//   {
//     key: 3,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909241109,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
//   {
//     key: 4,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909262806,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
//   {
//     key: 5,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909262806,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
//   {
//     key: 6,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909262806,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
//   {
//     key: 7,
//     name: "suresh",
//     project_name: "suresh_home",
//     location: "hyderbad",
//     assigned_on: 1728909262806,
//     status: "New",
//     priority: "Hot",
//     action: "Call",
//   },
// ];

const columns: TableColumnsType<DataSorceProps> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Project Name",
    dataIndex: "project_name",
    key: "project_name",
    render: (project_name) => {
      return (
        <Space className="hover:underline cursor-pointer" onClick={() => {}}>
          {project_name}
        </Space>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Assigned On",
    dataIndex: "assigned_on",
    key: "assigned_on",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.assigned_on - b.assigned_on,
    render: (assigned_on: number) => (
      <>{dayjs(assigned_on).format("YYYY-MM-DD, HH:mm A")}</>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color="blue" bordered={false}>
        <Space>
          <GoDotFill />
          {status}
        </Space>
      </Tag>
    ),
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    render: (priority: Priority) => {
      const colorr = {
        Hot: "red",
        Medium: "orange",
        Cold: "blue",
      };
      return (
        <Tag bordered={false}>
          <Space>
            <GoDotFill color={colorr[priority] ?? "gray"} />
            {priority}
          </Space>
        </Tag>
      );
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => {
      return (
        <Space className="text-green-500">
          <PhoneFilled rotate={90} />
          <Text className="font-medium text-lg text-green-500">Call</Text>
        </Space>
      );
    },
  },
];

const TableView = () => {
  return (
    <ConfigProvider
      theme={{
        components: { Table: { headerBg: "green", borderColor: "red" } },
      }}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 5,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        expandable={{
          expandedRowRender: (record) => (
            <Space>
              {dayjs(record.assigned_on).format("YYYY-MM-DD, HH:mm A")}
            </Space>
          ),
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <DownOutlined onClick={(e) => onExpand(record, e)} />
            ) : (
              <RightOutlined onClick={(e) => onExpand(record, e)} />
            ),
        }}
      />
    </ConfigProvider>
  );
};

export default TableView;
