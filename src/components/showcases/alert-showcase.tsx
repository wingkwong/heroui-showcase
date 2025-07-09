import React from "react";
import { 
  Alert, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const AlertShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Alerts" description="Alerts display important messages or feedback to users.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Alerts</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Alert>This is a default alert</Alert>
            <Alert title="Info Alert">This is an alert with a title</Alert>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Alert Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Alert color="default" title="Default">This is a default alert</Alert>
            <Alert color="primary" title="Primary">This is a primary alert</Alert>
            <Alert color="secondary" title="Secondary">This is a secondary alert</Alert>
            <Alert color="success" title="Success">This is a success alert</Alert>
            <Alert color="warning" title="Warning">This is a warning alert</Alert>
            <Alert color="danger" title="Danger">This is a danger alert</Alert>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Alert Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Alert variant="solid" title="Solid">This is a solid alert</Alert>
            <Alert variant="bordered" title="Bordered">This is a bordered alert</Alert>
            <Alert variant="flat" title="Flat">This is a flat alert</Alert>
            <Alert variant="faded" title="Faded">This is a faded alert</Alert>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Closable Alert</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Alert isClosable title="Closable Alert">
              This alert can be closed by clicking the X button
            </Alert>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Alert with Custom Icon</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Alert
              icon={<Icon icon="lucide:info" />}
              title="Custom Icon"
            >
              This alert has a custom icon
            </Alert>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};