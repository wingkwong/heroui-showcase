import React from "react";
import { 
  Checkbox, 
  CheckboxGroup,
  Radio,
  RadioGroup,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const CheckboxShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Checkboxes & Radios" description="Checkboxes and radio buttons allow users to select options from a set.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Checkbox</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-2">
            <Checkbox>Option</Checkbox>
            <Checkbox defaultSelected>Selected by default</Checkbox>
            <Checkbox isDisabled>Disabled</Checkbox>
            <Checkbox isDisabled defaultSelected>Disabled & Selected</Checkbox>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Checkbox Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-2">
            <Checkbox size="sm">Small</Checkbox>
            <Checkbox size="md">Medium</Checkbox>
            <Checkbox size="lg">Large</Checkbox>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Checkbox Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-2">
            <Checkbox color="default" defaultSelected>Default</Checkbox>
            <Checkbox color="primary" defaultSelected>Primary</Checkbox>
            <Checkbox color="secondary" defaultSelected>Secondary</Checkbox>
            <Checkbox color="success" defaultSelected>Success</Checkbox>
            <Checkbox color="warning" defaultSelected>Warning</Checkbox>
            <Checkbox color="danger" defaultSelected>Danger</Checkbox>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Checkbox Group</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <CheckboxGroup
            label="Select cities"
            defaultValue={["buenos-aires", "london"]}
          >
            <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
            <Checkbox value="sydney">Sydney</Checkbox>
            <Checkbox value="san-francisco">San Francisco</Checkbox>
            <Checkbox value="london">London</Checkbox>
            <Checkbox value="tokyo">Tokyo</Checkbox>
          </CheckboxGroup>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Radio Buttons</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-2">
            <RadioGroup>
              <Radio value="option-1">Option 1</Radio>
              <Radio value="option-2" defaultSelected>Option 2</Radio>
              <Radio value="option-3" isDisabled>Option 3 (disabled)</Radio>
            </RadioGroup>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Radio Group</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <RadioGroup label="Select your favorite city">
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Radio Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-2">
            <RadioGroup>
              <Radio color="default" value="default" defaultSelected>Default</Radio>
              <Radio color="primary" value="primary">Primary</Radio>
              <Radio color="secondary" value="secondary">Secondary</Radio>
              <Radio color="success" value="success">Success</Radio>
              <Radio color="warning" value="warning">Warning</Radio>
              <Radio color="danger" value="danger">Danger</Radio>
            </RadioGroup>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};