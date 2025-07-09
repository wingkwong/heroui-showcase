import React from "react";
import { 
  Badge, 
  Avatar,
  Button,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const BadgeShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Badges" description="Badges are used as a small numerical value or status descriptor for UI elements.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Badges</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge content="5">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=24" />
            </Badge>
            <Badge content="99+">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=25" />
            </Badge>
            <Badge content="new">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=26" />
            </Badge>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Badge Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge content="1" color="default">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=27" />
            </Badge>
            <Badge content="2" color="primary">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=28" />
            </Badge>
            <Badge content="3" color="secondary">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=29" />
            </Badge>
            <Badge content="4" color="success">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=30" />
            </Badge>
            <Badge content="5" color="warning">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=31" />
            </Badge>
            <Badge content="6" color="danger">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=32" />
            </Badge>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Badge Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge content="1" variant="solid">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=33" />
            </Badge>
            <Badge content="2" variant="flat">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=34" />
            </Badge>
            <Badge content="3" variant="faded">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=35" />
            </Badge>
            <Badge content="4" variant="shadow">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=36" />
            </Badge>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Badge Placements</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge content="1" placement="top-right">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=37" />
            </Badge>
            <Badge content="2" placement="top-left">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=38" />
            </Badge>
            <Badge content="3" placement="bottom-right">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=39" />
            </Badge>
            <Badge content="4" placement="bottom-left">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=40" />
            </Badge>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Badge Shapes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge content="1" shape="rectangle">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=41" />
            </Badge>
            <Badge content="2" shape="circle">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=42" />
            </Badge>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Dot Badge</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-6">
            <Badge isDot color="success">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=43" />
            </Badge>
            <Badge isDot color="danger">
              <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=44" />
            </Badge>
            <Badge isDot color="warning">
              <Button variant="flat">Notifications</Button>
            </Badge>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};