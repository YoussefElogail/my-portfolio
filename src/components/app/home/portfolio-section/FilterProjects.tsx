import { mainSkills, websiteTypes } from "@/data/data";
import React from "react";

const FilterProjects = ({
  onFilterChange,
  selected,
}: {
  onFilterChange: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}) => {
  const tabs = [{ label: "All", value: "" }, ...websiteTypes];

  return (
    <ul className="w-full md:w-auto h-fit flex md:flex-col gap-2 overflow-x-auto md:overflow-visible px-1 pb-2 md:px-0 md:pb-0">
      {tabs.map(({ label, value }) => (
        <li
          key={value || "all"}
          onClick={() => onFilterChange(value)}
          className={`text-wrap
  whitespace-nowrap rounded-lg px-4 py-3 text-center text-base md:text-xl cursor-pointer
            bg-secondary-black text-white transition-all duration-300 shadow-sm hover:shadow-primary-color
            ${selected === value ? "shadow-primary-color" : ""}
          `}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default FilterProjects;
