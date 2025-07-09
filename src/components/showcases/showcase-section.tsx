import React from "react";

interface ShowcaseSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ title, description, children }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-default-600 mt-2">{description}</p>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};