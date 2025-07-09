import React from "react";
import { ComponentShowcase } from "./components/component-showcase";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  const [activeSection, setActiveSection] = React.useState<string>("buttons");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "buttons", label: "Buttons" },
    { id: "inputs", label: "Inputs" },
    { id: "cards", label: "Cards" },
    { id: "modals", label: "Modals & Dialogs" },
    { id: "dropdowns", label: "Dropdowns" },
    { id: "tables", label: "Tables" },
    { id: "tabs", label: "Tabs" },
    { id: "avatars", label: "Avatars" },
    { id: "badges", label: "Badges" },
    { id: "chips", label: "Chips" },
    { id: "progress", label: "Progress & Spinners" },
    { id: "tooltips", label: "Tooltips" },
    { id: "alerts", label: "Alerts" },
    { id: "breadcrumbs", label: "Breadcrumbs" },
    { id: "checkboxes", label: "Checkboxes & Radios" },
    { id: "sliders", label: "Sliders" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar isBordered maxWidth="xl" className="sticky top-0 z-40">
        <NavbarBrand>
          <p className="font-bold text-inherit">HeroUI Components</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="https://heroui.chat" target="_blank">
              Documentation
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            <h2 className="text-lg font-semibold mb-4">Components</h2>
            <div className="hidden lg:block space-y-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="flat"
                  color={activeSection === section.id ? "primary" : "default"}
                  className="justify-start w-full"
                  onPress={() => scrollToSection(section.id)}
                >
                  {section.label}
                </Button>
              ))}
            </div>
            <div className="lg:hidden">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="flat"
                    endContent={<Icon icon="lucide:chevron-down" width={16} />}
                    className="w-full justify-between"
                  >
                    {sections.find(s => s.id === activeSection)?.label || "Select Component"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Component sections"
                  items={sections}
                  onAction={(key) => scrollToSection(key as string)}
                >
                  {(item) => (
                    <DropdownItem key={item.id}>
                      {item.label}
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">HeroUI Component Showcase</h1>
          <p className="text-default-600 mb-8">
            This page showcases all the components available in HeroUI v2.8.0-beta.13.
            Browse through the different sections to see examples of each component with various props and configurations.
          </p>

          <ComponentShowcase />
        </div>
      </div>
    </div>
  );
}