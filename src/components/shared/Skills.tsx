"use client";
import Image from "next/image";
import React from "react";
import MyToolTip from "./shadcn/MyToolTip";

type SkillsProps = {
  title?: string;
  skills: {
    icon: string;
    name: string;
  }[];
};

const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <div className="space-y-2 capitalize">
      {title && <p>{title}</p>}
      <div className="flex gap-1.5 items-center flex-wrap">
        {skills.map(({ name, icon }) => (
          <MyToolTip key={name} tip={name} className="capitalize">
            <div className="bg-secondary-black rounded-lg p-2 inline-block w-16 h-16">
              <Image
                src={icon}
                height={1000}
                width={1000}
                alt={name}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </MyToolTip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
