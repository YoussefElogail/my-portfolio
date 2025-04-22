import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="space-y-2 my-8">
      <p className="text-sm text-primary-color">{subtitle}</p>
      <h2 className="md:text-6xl text-2xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
