import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Import a utility for class merging
import React from "react";
import Image from "next/image";
import MotionElement from "@/components/shared/MotionElement";

type ProjectCardProps = {
  index: number;
  image: string;
  title: string;
  description: string;
  className: string;
} & React.ComponentProps<typeof Card>;

const ProjectCard = ({
  className,
  title,
  index,
  description,
  image,
  ...props
}: ProjectCardProps) => {
  return (
    <MotionElement
      as="div"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          className +
            "border-none border-transparent bg-secondary-black  shadow-sm shadow-primary-color gap-2 group cursor-pointer"
        )}
        {...props}
      >
        {image && (
          <CardHeader>
            {image && (
              <CardTitle className="overflow-hidden rounded-md">
                <Image
                  unoptimized
                  src={image}
                  alt={title}
                  height={1000}
                  width={1000}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-all duration-300 "
                />
              </CardTitle>
            )}
          </CardHeader>
        )}
        {description && (
          <CardContent className="space-y-4">
            <h3 className="text-primary-color text-xs">{title}</h3>
            <p className="text-sm text-gray-400">
              {description.slice(0, 30)}...
            </p>
          </CardContent>
        )}
      </Card>
    </MotionElement>
  );
};

export default ProjectCard;
