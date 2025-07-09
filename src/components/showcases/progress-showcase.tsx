import React from "react";
import { 
  Progress, 
  CircularProgress,
  Spinner,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const ProgressShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Progress & Spinners" description="Progress indicators and spinners show the completion status of an operation or task.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Linear Progress</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-small text-default-500 mb-3">Default</p>
              <Progress value={60} className="max-w-md" />
            </div>
            
            <div>
              <p className="text-small text-default-500 mb-3">Indeterminate</p>
              <Progress isIndeterminate className="max-w-md" />
            </div>
            
            <div>
              <p className="text-small text-default-500 mb-3">Striped</p>
              <Progress value={35} isStriped className="max-w-md" />
            </div>
            
            <div>
              <p className="text-small text-default-500 mb-3">With Label</p>
              <Progress
                label="Loading..."
                value={70}
                showValueLabel
                className="max-w-md"
              />
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Progress Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6">
            <Progress color="default" value={60} className="max-w-md" />
            <Progress color="primary" value={60} className="max-w-md" />
            <Progress color="secondary" value={60} className="max-w-md" />
            <Progress color="success" value={60} className="max-w-md" />
            <Progress color="warning" value={60} className="max-w-md" />
            <Progress color="danger" value={60} className="max-w-md" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Progress Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-6">
            <Progress size="sm" value={40} className="max-w-md" />
            <Progress size="md" value={40} className="max-w-md" />
            <Progress size="lg" value={40} className="max-w-md" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Circular Progress</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-6">
            <CircularProgress value={80} />
            <CircularProgress value={60} color="secondary" />
            <CircularProgress value={40} color="success" />
            <CircularProgress value={20} color="warning" />
            <CircularProgress value={10} color="danger" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Spinners</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-6">
            <Spinner />
            <Spinner color="primary" />
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="warning" />
            <Spinner color="danger" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Spinner Sizes</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-6 items-center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Spinner Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="default" />
              <span className="text-small text-default-500">Default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="simple" />
              <span className="text-small text-default-500">Simple</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="gradient" />
              <span className="text-small text-default-500">Gradient</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="wave" />
              <span className="text-small text-default-500">Wave</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="dots" />
              <span className="text-small text-default-500">Dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="spinner" />
              <span className="text-small text-default-500">Spinner</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};