import React from "react";
import { 
  Breadcrumbs, 
  BreadcrumbItem,
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const BreadcrumbsShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Breadcrumbs" description="Breadcrumbs help users navigate through a website's hierarchy.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Breadcrumbs</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
            <BreadcrumbItem>Electronics</BreadcrumbItem>
            <BreadcrumbItem>Smartphones</BreadcrumbItem>
          </Breadcrumbs>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Breadcrumbs with Current Item</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
            <BreadcrumbItem>Electronics</BreadcrumbItem>
            <BreadcrumbItem isCurrent>Smartphones</BreadcrumbItem>
          </Breadcrumbs>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Breadcrumbs Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-small text-default-500 mb-3">Solid</p>
              <Breadcrumbs variant="solid">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem>Electronics</BreadcrumbItem>
                <BreadcrumbItem>Smartphones</BreadcrumbItem>
              </Breadcrumbs>
            </div>
            
            <div>
              <p className="text-small text-default-500 mb-3">Bordered</p>
              <Breadcrumbs variant="bordered">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem>Electronics</BreadcrumbItem>
                <BreadcrumbItem>Smartphones</BreadcrumbItem>
              </Breadcrumbs>
            </div>
            
            <div>
              <p className="text-small text-default-500 mb-3">Light</p>
              <Breadcrumbs variant="light">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Products</BreadcrumbItem>
                <BreadcrumbItem>Electronics</BreadcrumbItem>
                <BreadcrumbItem>Smartphones</BreadcrumbItem>
              </Breadcrumbs>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Breadcrumbs Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-col gap-4">
            <Breadcrumbs color="primary">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Electronics</BreadcrumbItem>
              <BreadcrumbItem>Smartphones</BreadcrumbItem>
            </Breadcrumbs>
            
            <Breadcrumbs color="secondary">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Electronics</BreadcrumbItem>
              <BreadcrumbItem>Smartphones</BreadcrumbItem>
            </Breadcrumbs>
            
            <Breadcrumbs color="success">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Products</BreadcrumbItem>
              <BreadcrumbItem>Electronics</BreadcrumbItem>
              <BreadcrumbItem>Smartphones</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Breadcrumbs with Custom Separator</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Breadcrumbs separator="/">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
            <BreadcrumbItem>Electronics</BreadcrumbItem>
            <BreadcrumbItem>Smartphones</BreadcrumbItem>
          </Breadcrumbs>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Breadcrumbs with Icon</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Breadcrumbs>
            <BreadcrumbItem>
              <Icon icon="lucide:home" className="mr-1" />
              Home
            </BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
            <BreadcrumbItem>Electronics</BreadcrumbItem>
            <BreadcrumbItem>Smartphones</BreadcrumbItem>
          </Breadcrumbs>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};