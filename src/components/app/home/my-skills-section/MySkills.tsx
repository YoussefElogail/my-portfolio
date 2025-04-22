import MotionElement from "@/components/shared/MotionElement";
import SectionTitle from "@/components/shared/SectionTitle";
import Skills from "@/components/shared/Skills";
import React from "react";
const skills = [
  {
    name: "HTML5",
    icon: "/icons/html-1.svg",
  },
  {
    name: "CSS3",
    icon: "/icons/css-3.svg",
  },
  {
    name: "SCSS",
    icon: "/icons/sass-1.svg",
  },
  {
    name: "Bootstrap5",
    icon: "/icons/bootstrap-4.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind-css-2.svg",
  },
  {
    name: "MUI",
    icon: "/icons/material-ui-1.svg",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript-r.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React.js",
    icon: "/icons/react-2.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/next-js.svg",
  },
  {
    name: "Firebase",
    icon: "/icons/firebase-2.svg",
  },
  {
    name: "WordPress",
    icon: "/icons/wordpress-icon-1.svg",
  },
];

const MySkills = () => {
  return (
    <MotionElement
      as="section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="section-container"
    >
      <SectionTitle
        title="My skills"
        subtitle="what is i can do it for you by "
      />
      <Skills skills={skills} />
    </MotionElement>
  );
};

export default MySkills;
