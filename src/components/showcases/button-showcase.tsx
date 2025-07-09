import React from "react";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const ButtonShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Buttons" description="Buttons allow users to perform actions and choose with a single tap.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Button Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid">Solid</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="light">Light</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="faded">Faded</Button>
            <Button variant="shadow">Shadow</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Button Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Button Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Button Radius</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button radius="none">None</Button>
            <Button radius="sm">Small</Button>
            <Button radius="md">Medium</Button>
            <Button radius="lg">Large</Button>
            <Button radius="full">Full</Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Button States</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button isDisabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Icon Buttons</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Button startContent={<Icon icon="lucide:heart" />}>
              Like
            </Button>
            <Button endContent={<Icon icon="lucide:arrow-right" />}>
              Next
            </Button>
            <Button isIconOnly>
              <Icon icon="lucide:plus" />
            </Button>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Full Width Button</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Button fullWidth>Full Width Button</Button>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};