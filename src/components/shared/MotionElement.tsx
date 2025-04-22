"use client";
import { motion, MotionProps } from "framer-motion";
import { ElementType, ReactNode } from "react";

type MotionElementProps = MotionProps & {
  as?: ElementType; 
  children: ReactNode;
  className?: string;
};

const MotionElement = ({ as: Component = "div", children, ...props }: MotionElementProps) => {
  const MotionComponent = motion(Component as ElementType);
  return <MotionComponent {...props}>{children}</MotionComponent>;
};

export default MotionElement;
