"use client";
import TanstackTable from "@/components/shared/TanstackTable";
import { clumnDef } from "./columnDef";
import ProjectForm from "@/components/app/dashboard/projects/ProjectForm";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/config/firebase";
import { collection } from "firebase/firestore";
import Spier from "@/components/shared/Spier";
import { IProject } from "@/types/project";

const ProjectsPage = () => {
  const [value, loading, error] = useCollection(collection(db, "projects"));
  const data: IProject[] =
    value?.docs?.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<IProject, "id">),
    })) || [];

  if (loading) return <Spier loading={loading} />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <TanstackTable
      columnDef={clumnDef}
      data={data}
      title="Project"
      canCreate
      formComponent={<ProjectForm />}
    />
  );
};

export default ProjectsPage;
