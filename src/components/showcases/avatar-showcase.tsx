import React from "react";
import { 
  Avatar, 
  AvatarGroup,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const AvatarShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Avatars" description="Avatars represent users or entities with images, initials, or icons.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Avatars</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 items-center">
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" />
            <Avatar name="Jane Doe" />
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=2" />
            <Avatar name="Joe Smith" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Avatar Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 items-center">
            <Avatar size="sm" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=3" />
            <Avatar size="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=4" />
            <Avatar size="lg" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=5" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Avatar Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 items-center">
            <Avatar name="Default" color="default" />
            <Avatar name="Primary" color="primary" />
            <Avatar name="Secondary" color="secondary" />
            <Avatar name="Success" color="success" />
            <Avatar name="Warning" color="warning" />
            <Avatar name="Danger" color="danger" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Avatar Radius</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 items-center">
            <Avatar radius="none" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=6" />
            <Avatar radius="sm" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=7" />
            <Avatar radius="md" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=8" />
            <Avatar radius="lg" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=9" />
            <Avatar radius="full" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=10" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Avatar Group</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <AvatarGroup>
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=11" />
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=12" />
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=13" />
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=14" />
            <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=15" />
          </AvatarGroup>

          <div className="mt-4">
            <p className="text-small text-default-500 mb-3">With max count</p>
            <AvatarGroup max={3}>
              <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=16" />
              <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=17" />
              <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=18" />
              <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=19" />
              <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=20" />
            </AvatarGroup>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Avatar States</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex gap-4 items-center">
            <Avatar isBordered src="https://img.heroui.chat/image/avatar?w=200&h=200&u=21" />
            <Avatar isDisabled src="https://img.heroui.chat/image/avatar?w=200&h=200&u=22" />
            <Avatar isBordered color="primary" src="https://img.heroui.chat/image/avatar?w=200&h=200&u=23" />
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};