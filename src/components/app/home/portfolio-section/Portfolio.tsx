"use client";

import FilterProjects from "@/components/app/home/portfolio-section/FilterProjects";
import MotionElement from "@/components/shared/MotionElement";
import ProjectDetails from "@/components/app/home/portfolio-section/ProjectDetails";
import SectionTitle from "@/components/shared/SectionTitle";
import MyDialog from "@/components/shared/shadcn/MyDialog";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { IProject, IProjectDetails } from "@/types/project";

const Portfolio = () => {
  const [filterQuery, setFilterQuery] = useState("");
  const q = filterQuery
    ? query(
        collection(db, "projects"),
        where("websiteType", "array-contains", filterQuery)
      )
    : query(collection(db, "projects"));

  const [value, loading, error] = useCollection(q);

  const projects: IProjectDetails[] =
    value?.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as IProjectDetails)
    ) || [];

  console.log(projects);

  return (
    <section className="section-container" id="portfolio">
      <SectionTitle
        title="My Portfolio"
        subtitle="Visit my portfolio and keep your feedback"
      />

      <div className="flex flex-col md:grid md:grid-cols-12 gap-8 ">
        <div className="md:col-span-3">
          <FilterProjects
            onFilterChange={setFilterQuery}
            selected={filterQuery}
          />
        </div>

        {projects.length > 0 ? (
          <div className="flex flex-nowrap overflow-x-auto overflow-hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:col-span-9 pb-8">
            {projects.map((project, i) => {
              return (
                <MyDialog
                  className="bg-secondary-black text-white border-1 border-primary-color "
                  key={project.id}
                  trigger={
                    <ProjectCard
                      index={i}
                      image={project.image}
                      title={project.name}
                      description={project.description}
                      className="border-none cursor-pointer min-w-[200px] "
                    />
                  }
                >
                  <ProjectDetails
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    link={project.link}
                    websiteType={project.websiteType}
                  />
                </MyDialog>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full  h-60 text-center text-lightn bg-secondary-black rounded-lg shadow-md md:col-span-9">
            <p className="text-xl font-semibold mb-2">No projects found</p>
            <p className="text-sm text-gray-400">Please check back later!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
