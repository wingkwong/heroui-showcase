import React from "react";
import { Input, Card, CardBody, CardHeader, Divider, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const InputShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Inputs" description="Input components allow users to enter text and data.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Input</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Input label="Username" placeholder="Enter your username" />
            <Input 
              label="Password" 
              placeholder="Enter your password" 
              type="password" 
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Input Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Input label="Default" placeholder="Default input" />
            <Input label="Bordered" placeholder="Bordered input" variant="bordered" />
            <Input label="Faded" placeholder="Faded input" variant="faded" />
            <Input label="Flat" placeholder="Flat input" variant="flat" />
            <Input label="Underlined" placeholder="Underlined input" variant="underlined" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Input Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Input size="sm" label="Small" placeholder="Small input" />
            <Input size="md" label="Medium" placeholder="Medium input" />
            <Input size="lg" label="Large" placeholder="Large input" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Input States</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Input label="Default" placeholder="Default input" />
            <Input label="Disabled" placeholder="Disabled input" isDisabled />
            <Input label="Required" placeholder="Required input" isRequired />
            <Input 
              label="Invalid" 
              placeholder="Invalid input" 
              isInvalid 
              errorMessage="This field is required" 
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Input with Content</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Input
              label="Email"
              placeholder="Enter your email"
              startContent={<Icon icon="lucide:mail" className="text-default-400" />}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              endContent={<Icon icon="lucide:eye" className="text-default-400" />}
              type="password"
            />
            <Input
              label="Price"
              placeholder="Enter amount"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">USD</span>
                </div>
              }
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Textarea</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4 max-w-md">
            <Textarea
              label="Description"
              placeholder="Enter your description"
              className="max-w-md"
            />
            <Textarea
              label="Minimal Rows"
              placeholder="Enter your description"
              minRows={1}
              className="max-w-md"
            />
            <Textarea
              label="Maximum Rows"
              placeholder="Enter your description"
              maxRows={3}
              className="max-w-md"
            />
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};