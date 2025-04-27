import ShowProject from "@/components/app/product-details/ShowProject";
import React from "react";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  console.log(id);

  return <ShowProject {...{ id }} />;
};

export default ProjectDetailsPage;
