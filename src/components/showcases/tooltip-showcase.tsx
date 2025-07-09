import React from "react";
import { 
  Tooltip, 
  Button,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const TooltipShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Tooltips" description="Tooltips display informative text when users hover over, focus on, or tap an element.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Tooltip</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is a tooltip">
              <Button>Hover me</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tooltip Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Default tooltip" color="default">
              <Button variant="flat">Default</Button>
            </Tooltip>
            <Tooltip content="Primary tooltip" color="primary">
              <Button variant="flat">Primary</Button>
            </Tooltip>
            <Tooltip content="Secondary tooltip" color="secondary">
              <Button variant="flat">Secondary</Button>
            </Tooltip>
            <Tooltip content="Success tooltip" color="success">
              <Button variant="flat">Success</Button>
            </Tooltip>
            <Tooltip content="Warning tooltip" color="warning">
              <Button variant="flat">Warning</Button>
            </Tooltip>
            <Tooltip content="Danger tooltip" color="danger">
              <Button variant="flat">Danger</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tooltip Placements</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Top tooltip" placement="top">
              <Button variant="flat">Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button variant="flat">Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button variant="flat">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button variant="flat">Left</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tooltip with Arrow</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Tooltip with arrow" showArrow>
              <Button variant="flat">With Arrow</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tooltip Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Small tooltip" size="sm">
              <Button variant="flat">Small</Button>
            </Tooltip>
            <Tooltip content="Medium tooltip" size="md">
              <Button variant="flat">Medium</Button>
            </Tooltip>
            <Tooltip content="Large tooltip" size="lg">
              <Button variant="flat">Large</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tooltip with Delay</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Delayed tooltip" delay={500}>
              <Button variant="flat">With Delay (500ms)</Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};