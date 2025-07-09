import React from "react";
import { ButtonShowcase } from "./showcases/button-showcase";
import { InputShowcase } from "./showcases/input-showcase";
import { CardShowcase } from "./showcases/card-showcase";
import { ModalShowcase } from "./showcases/modal-showcase";
import { DropdownShowcase } from "./showcases/dropdown-showcase";
import { TableShowcase } from "./showcases/table-showcase";
import { TabsShowcase } from "./showcases/tabs-showcase";
import { AvatarShowcase } from "./showcases/avatar-showcase";
import { BadgeShowcase } from "./showcases/badge-showcase";
import { ChipShowcase } from "./showcases/chip-showcase";
import { ProgressShowcase } from "./showcases/progress-showcase";
import { TooltipShowcase } from "./showcases/tooltip-showcase";
import { AlertShowcase } from "./showcases/alert-showcase";
import { BreadcrumbsShowcase } from "./showcases/breadcrumbs-showcase";
import { CheckboxShowcase } from "./showcases/checkbox-showcase";
import { SliderShowcase } from "./showcases/slider-showcase";

export const ComponentShowcase: React.FC = () => {
  return (
    <div className="space-y-16">
      <section id="buttons" className="scroll-mt-24">
        <ButtonShowcase />
      </section>
      
      <section id="inputs" className="scroll-mt-24">
        <InputShowcase />
      </section>
      
      <section id="cards" className="scroll-mt-24">
        <CardShowcase />
      </section>
      
      <section id="modals" className="scroll-mt-24">
        <ModalShowcase />
      </section>
      
      <section id="dropdowns" className="scroll-mt-24">
        <DropdownShowcase />
      </section>
      
      <section id="tables" className="scroll-mt-24">
        <TableShowcase />
      </section>
      
      <section id="tabs" className="scroll-mt-24">
        <TabsShowcase />
      </section>
      
      <section id="avatars" className="scroll-mt-24">
        <AvatarShowcase />
      </section>
      
      <section id="badges" className="scroll-mt-24">
        <BadgeShowcase />
      </section>
      
      <section id="chips" className="scroll-mt-24">
        <ChipShowcase />
      </section>
      
      <section id="progress" className="scroll-mt-24">
        <ProgressShowcase />
      </section>
      
      <section id="tooltips" className="scroll-mt-24">
        <TooltipShowcase />
      </section>
      
      <section id="alerts" className="scroll-mt-24">
        <AlertShowcase />
      </section>
      
      <section id="breadcrumbs" className="scroll-mt-24">
        <BreadcrumbsShowcase />
      </section>
      
      <section id="checkboxes" className="scroll-mt-24">
        <CheckboxShowcase />
      </section>
      
      <section id="sliders" className="scroll-mt-24">
        <SliderShowcase />
      </section>
    </div>
  );
};