import React from "react";
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  DropdownSection,
  Button, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ShowcaseSection } from "./showcase-section";

export const DropdownShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Dropdowns" description="Dropdowns display a list of actions or options that a user can choose.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Dropdown</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Dropdown with Sections</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Sections
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Actions with sections">
              <DropdownSection title="Actions" showDivider>
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownSection>
              <DropdownSection title="Danger zone">
                <DropdownItem key="delete" className="text-danger" color="danger">
                  Delete file
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Dropdown with Icons</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat">
                With Icons
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Actions with icons">
              <DropdownItem
                key="new"
                startContent={<Icon icon="lucide:file-plus" width={18} />}
              >
                New file
              </DropdownItem>
              <DropdownItem
                key="copy"
                startContent={<Icon icon="lucide:copy" width={18} />}
              >
                Copy link
              </DropdownItem>
              <DropdownItem
                key="edit"
                startContent={<Icon icon="lucide:edit" width={18} />}
              >
                Edit file
              </DropdownItem>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                startContent={<Icon icon="lucide:trash" width={18} />}
              >
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Dropdown Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex flex-wrap gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat">Flat</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Example menu">
                <DropdownItem key="1">Option 1</DropdownItem>
                <DropdownItem key="2">Option 2</DropdownItem>
                <DropdownItem key="3">Option 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Bordered</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Example menu">
                <DropdownItem key="1">Option 1</DropdownItem>
                <DropdownItem key="2">Option 2</DropdownItem>
                <DropdownItem key="3">Option 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button variant="solid">Solid</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Example menu">
                <DropdownItem key="1">Option 1</DropdownItem>
                <DropdownItem key="2">Option 2</DropdownItem>
                <DropdownItem key="3">Option 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};