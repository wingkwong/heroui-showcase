import React from "react";
import { 
  Tabs, 
  Tab, 
  Card, 
  CardBody, 
  CardHeader, 
  Divider 
} from "@heroui/react";
import { ShowcaseSection } from "./showcase-section";

export const TabsShowcase: React.FC = () => {
  return (
    <ShowcaseSection title="Tabs" description="Tabs organize content into multiple sections and allow users to navigate between them.">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Basic Tabs</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tab Variants</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="space-y-8">
            <div>
              <p className="text-small text-default-500 mb-3">Underlined Tabs</p>
              <Tabs aria-label="Options" variant="underlined">
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>
                      This is the content for the Photos tab using the underlined variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      This is the content for the Music tab using the underlined variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      This is the content for the Videos tab using the underlined variant.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <p className="text-small text-default-500 mb-3">Bordered Tabs</p>
              <Tabs aria-label="Options" variant="bordered">
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>
                      This is the content for the Photos tab using the bordered variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      This is the content for the Music tab using the bordered variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      This is the content for the Videos tab using the bordered variant.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <div>
              <p className="text-small text-default-500 mb-3">Light Tabs</p>
              <Tabs aria-label="Options" variant="light">
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>
                      This is the content for the Photos tab using the light variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      This is the content for the Music tab using the light variant.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      This is the content for the Videos tab using the light variant.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Tab Colors</h3>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="space-y-8">
            <Tabs aria-label="Options" color="primary">
              <Tab key="tab1" title="Primary">
                <Card>
                  <CardBody>Primary color tab content</CardBody>
                </Card>
              </Tab>
              <Tab key="tab2" title="Tab 2">
                <Card>
                  <CardBody>Tab 2 content</CardBody>
                </Card>
              </Tab>
            </Tabs>

            <Tabs aria-label="Options" color="secondary">
              <Tab key="tab1" title="Secondary">
                <Card>
                  <CardBody>Secondary color tab content</CardBody>
                </Card>
              </Tab>
              <Tab key="tab2" title="Tab 2">
                <Card>
                  <CardBody>Tab 2 content</CardBody>
                </Card>
              </Tab>
            </Tabs>

            <Tabs aria-label="Options" color="success">
              <Tab key="tab1" title="Success">
                <Card>
                  <CardBody>Success color tab content</CardBody>
                </Card>
              </Tab>
              <Tab key="tab2" title="Tab 2">
                <Card>
                  <CardBody>Tab 2 content</CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </CardBody>
      </Card>
    </ShowcaseSection>
  );
};