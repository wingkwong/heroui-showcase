import React from "react";
import { 
  Chip, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider,
  Avatar
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const ChipShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Chips" description="Chips represent small blocks of information like attributes, filters, or actions.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Chips</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Chip>Default</Chip>
            <Chip onClose={() => console.log("Close clicked")}>Closable</Chip>
            <Chip isDisabled>Disabled</Chip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Chip Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Chip color="default">Default</Chip>
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary">Secondary</Chip>
            <Chip color="success">Success</Chip>
            <Chip color="warning">Warning</Chip>
            <Chip color="danger">Danger</Chip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Chip Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Chip variant="solid">Solid</Chip>
            <Chip variant="bordered">Bordered</Chip>
            <Chip variant="light">Light</Chip>
            <Chip variant="flat">Flat</Chip>
            <Chip variant="faded">Faded</Chip>
            <Chip variant="shadow">Shadow</Chip>
            <Chip variant="dot">Dot</Chip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Chip Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Chip Radius</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Chip radius="none">None</Chip>
            <Chip radius="sm">Small</Chip>
            <Chip radius="md">Medium</Chip>
            <Chip radius="lg">Large</Chip>
            <Chip radius="full">Full</Chip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Chips with Content</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Chip
              avatar={<Avatar name="JD" size="sm" />}
              variant="flat"
            >
              Jane Doe
            </Chip>
            <Chip
              startContent={<Icon icon="lucide:user" />}
              variant="flat"
            >
              User
            </Chip>
            <Chip
              endContent={<Icon icon="lucide:x" />}
              variant="flat"
              onClose={() => console.log("Close clicked")}
            >
              Closable
            </Chip>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};