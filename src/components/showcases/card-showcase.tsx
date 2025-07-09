import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Image } from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const CardShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Cards" description="Cards are flexible containers for displaying content and actions.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Basic Card</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>This is a basic card with header, body, and footer.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>

        <Card shadow="sm">
          <CardHeader className="flex gap-3">
            <Image
              alt="Card example"
              height={40}
              radius="sm"
              src="https://img.heroui.chat/image/avatar?w=40&h=40&u=1"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Card with Image</p>
              <p className="text-small text-default-500">heroui.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Cards can include images and other content in the header.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button color="primary">Share</Button>
          </CardFooter>
        </Card>

        <Card isPressable isHoverable>
          <CardHeader>
            <h3 className="text-lg font-semibold">Hoverable & Pressable</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>This card is hoverable and pressable.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p className="text-default-500 text-small">Click anywhere on this card</p>
          </CardFooter>
        </Card>

        <Card>
          <CardBody>
            <p>This is a simple card with only a body.</p>
          </CardBody>
        </Card>

        <Card shadow="lg">
          <CardHeader>
            <h3 className="text-lg font-semibold">Card with Large Shadow</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>This card has a large shadow.</p>
          </CardBody>
        </Card>

        <Card radius="none">
          <CardHeader>
            <h3 className="text-lg font-semibold">Card with No Radius</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>This card has no border radius.</p>
          </CardBody>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <h3 className="text-lg font-semibold">Card with Image Cover</h3>
        </CardHeader>
        <CardBody className="overflow-visible p-0">
          <Image
            alt="Card background"
            className="w-full object-cover h-48"
            src="https://img.heroui.chat/image/landscape?w=800&h=400&u=1"
          />
        </CardBody>
        <CardFooter className="justify-between">
          <p className="text-default-500">Beautiful landscape</p>
          <Button color="primary" radius="full" size="sm">
            Explore
          </Button>
        </CardFooter>
      </Card>
    </ShowcaseSection>
  );
};