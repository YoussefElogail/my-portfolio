import Image from "next/image";
import React from "react";
import { Button } from "../../../ui/button";
import { IProjectDetails } from "@/types/project";
import Link from "next/link";
import { activeRoutes } from "@/routes/activeRoutes";

const ProjectDetails = ({
  description,
  image,
  name,
  technologies,
  link,
  websiteType,
  id,
}: IProjectDetails) => {
  console.log(id);
  return (
    <div className="flex flex-col md:flex-row gap-6 overflow-y-auto max-h-[400px]">
      <div className="md:w-1/2">
        <Image
          src={image}
          alt={name}
          height={600}
          width={800}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold mt-2 text-primary-color">
            {name}
          </h4>
          <p className="mt-4 text-sm text-gray-300">{description}</p>
          {technologies && (
            <div className="mt-2">
              <b>Technologies:</b>
              <div className="mt-1 flex flex-wrap gap-2">
                {technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-muted px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {websiteType && (
            <div className="mt-2">
              <b>Website Types:</b>
              <div className="mt-1 flex flex-wrap gap-2">
                {websiteType?.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-muted px-2 py-1 rounded-md text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full cursor-pointer">Live</Button>
          </a>
          <Link href={`${activeRoutes.productDetails}/${id}`}>
            <Button className="mt-4 w-full cursor-pointer">Show details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
