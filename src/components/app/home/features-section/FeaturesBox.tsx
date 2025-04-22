import MotionElement from "@/components/shared/MotionElement";
import React from "react";

type FeaturesBoxProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeaturesBox = ({ index, description, icon, title }: FeaturesBoxProps) => {
  return (
    <MotionElement
      as="div"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-linear-background-black px-12 py-9 flex flex-col gap-4 rounded-md shadow-sm shadow-primary-color"
    >
      <span className=" text-primary-color">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </MotionElement>
  );
};

export default FeaturesBox;
