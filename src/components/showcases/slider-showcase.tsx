import React from "react";
import { 
  Slider, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider,
  Button
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const SliderShowcase: React.FC = () => {
  const [value, setValue] = React.useState(25);
  
  return (
    <ShowcaseSection title="Sliders" description="Sliders allow users to select a value from a range.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Slider</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider 
              label="Volume" 
              step={1} 
              maxValue={100} 
              minValue={0} 
              defaultValue={25}
              className="max-w-md"
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Slider Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider color="foreground" defaultValue={25} label="Foreground" />
            <Slider color="primary" defaultValue={50} label="Primary" />
            <Slider color="secondary" defaultValue={75} label="Secondary" />
            <Slider color="success" defaultValue={40} label="Success" />
            <Slider color="warning" defaultValue={60} label="Warning" />
            <Slider color="danger" defaultValue={80} label="Danger" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Slider Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider size="sm" defaultValue={25} label="Small" />
            <Slider size="md" defaultValue={50} label="Medium" />
            <Slider size="lg" defaultValue={75} label="Large" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Slider with Step</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider 
              step={10} 
              maxValue={100} 
              minValue={0} 
              defaultValue={40}
              label="Step: 10"
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Slider with Content</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider
              aria-label="Volume"
              color="success"
              value={value}
              onChange={setValue}
              className="max-w-md"
              startContent={
                <Button
                  isIconOnly
                  radius="full"
                  variant="light"
                  onPress={() => setValue((prev) => (prev >= 10 ? prev - 10 : 0))}
                >
                  <Icon icon="lucide:volume-1" className="text-xl" />
                </Button>
              }
              endContent={
                <Button
                  isIconOnly
                  radius="full"
                  variant="light"
                  onPress={() => setValue((prev) => (prev <= 90 ? prev + 10 : 100))}
                >
                  <Icon icon="lucide:volume-2" className="text-xl" />
                </Button>
              }
            />
            <p className="text-default-500 text-small">Current value: {value}</p>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Disabled Slider</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6 max-w-md">
            <Slider 
              isDisabled
              defaultValue={45}
              label="Disabled"
            />
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};