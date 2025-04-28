import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import { motion } from "framer-motion";
import MotionElement from "@/components/shared/MotionElement";
import FeaturesBox from "./FeaturesBox";

import {
  LayoutTemplate,
  Brush,
  Plug,
  GaugeCircle,
  Wrench,
  RefreshCcw,
} from "lucide-react";

const featuresData = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, fast, and accessible interfaces using React, Next.js, and modern frontend technologies.",
    icon: <LayoutTemplate size={50} />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning creative designs into smooth user interfaces with attention to user experience and interaction details.",
    icon: <Brush size={50} />,
  },
  {
    title: "API Integration",
    description:
      "Connecting frontends with powerful backends using RESTful and GraphQL APIs for dynamic and data-driven apps.",
    icon: <Plug size={50} />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing websites and apps for performance, SEO, and fast loading using best practices.",
    icon: <GaugeCircle size={50} />,
  },
  {
    title: "Website Maintenance",
    description:
      "Providing regular updates, bug fixes, and improvements to keep websites running smoothly and securely.",
    icon: <Wrench size={50} />,
  },
  {
    title: "UI Enhancement & Redesign",
    description:
      "Improving existing website designs for better usability, aesthetics, and conversion rates.",
    icon: <RefreshCcw size={50} />,
  },
];

const Features = () => {
  return (
    <MotionElement
      as="section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="section-container"
      id="features"
    >
      <SectionTitle title="What I Do" subtitle="Features" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, i) => (
          <FeaturesBox
            key={i}
            index={i}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </MotionElement>
  );
};

export default Features;
