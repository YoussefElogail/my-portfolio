import { IProject } from "@/types/project";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // تأكد من أن لديك مكون Button
import MyDialog from "@/components/shared/shadcn/MyDialog";
import ProjectForm from "@/components/app/dashboard/projects/ProjectForm";
import useDeleteData from "@/hooks/useDeleteData";

const columnHelper = createColumnHelper<IProject>();

export const clumnDef = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => <p>{info.getValue()}</p>,
  }),
  columnHelper.accessor("image", {
    header: "Image",
    cell: (info) => (
      <Image
        src={info.getValue()}
        alt="project image"
        height={100}
        width={100}
        unoptimized
        loading="lazy"
      />
    ),
  }),
  columnHelper.accessor("link", {
    header: "Link",
    cell: (info) => (
      <a href={info.getValue()} target="_blank" rel="noopener noreferrer">
        {info.getValue()}
      </a>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (info) => {
      const project = info.row.original;
      return (
        <div className="flex space-x-2">
          <MyDialog
            dialogTitle={`Edit ${project.name} project`}
            trigger={<Button className="cursor-pointer">Edit</Button>}
          >
            <ProjectForm data={project} />
          </MyDialog>
          <Button
            onClick={() => handleDelete(project)}
            variant="destructive"
            className="cursor-pointer"
          >
            Delete
          </Button>
        </div>
      );
    },
  }),
];

const handleDelete = (project: IProject) => {
  console.log(project.id);
  const { deleteData } = useDeleteData();
  deleteData({ docId: project.id, collectionName: "projects" });
  // هنا يمكنك إضافة منطق لحذف المشروع (مثلًا، حذف من قاعدة البيانات)
};
