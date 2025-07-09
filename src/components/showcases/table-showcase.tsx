import React from "react";
import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
  Card, 
  CardBody, 
  CardHeader, 
  Divider,
  Chip,
  User
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

const columns = [
  { key: "name", label: "NAME" },
  { key: "role", label: "ROLE" },
  { key: "status", label: "STATUS" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
    avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=1",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
    avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=2",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
    avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=3",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
    avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=4",
  },
];

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  Active: "success",
  Paused: "danger",
  Vacation: "warning",
};

export const TableShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Tables" description="Tables display tabular data in rows and columns.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Table</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>ROLE</TableColumn>
              <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Table with Custom Cells</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Table removeWrapper aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={users}>
              {(item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <User
                      avatarProps={{ radius: "lg", src: item.avatar }}
                      description={item.role}
                      name={item.name}
                    >
                      {item.name}
                    </User>
                  </TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color={statusColorMap[item.status]}
                      size="sm"
                      variant="flat"
                    >
                      {item.status}
                    </Chip>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Table Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="space-y-8">
            <div>
              <p className="text-small text-default-500 mb-3">Striped Table</p>
              <Table removeWrapper isStriped aria-label="Example table with striped rows">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <p className="text-small text-default-500 mb-3">Compact Table</p>
              <Table removeWrapper isCompact aria-label="Example table with compact rows">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};