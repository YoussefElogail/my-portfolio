"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/config/firebase";
import { IProjectDetails } from "@/types/project";
import { doc } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";

const ShowProject = ({ id }: { id: string }) => {
  const projectRef = doc(db, "projects", id); // استبدال "projects" باسم مجموعتك في Firebase
  const [projectDoc, loading, error] = useDocument(projectRef);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading project details</div>;

  const projectData = projectDoc?.data() as IProjectDetails;

  if (!projectData) {
    return <div>No project found</div>;
  }

  return (
    <section className="grid md:grid-cols-2 gap-6 p-6">
      <div>
        <Image
          src={projectData.image || "https://placehold.co/600x400"}
          alt={projectData.name}
          height={600}
          width={800}
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold mt-2 text-primary-color">
            {projectData.name}
          </h4>
          <p className="mt-4 text-sm text-gray-300">
            {projectData.description}
          </p>
          {projectData.technologies && (
            <div className="mt-2">
              <b>Technologies:</b>
              <div className="mt-1 flex flex-wrap gap-2">
                {projectData.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-muted px-2 py-1 rounded-md text-sm text-secondary-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {projectData.websiteType && (
            <div className="mt-2">
              <b>Website Types:</b>
              <div className="mt-1 flex flex-wrap gap-2">
                {projectData.websiteType?.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-muted px-2 py-1 rounded-md text-sm text-secondary-black"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-4">
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 w-full cursor-pointer">Live</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowProject;
