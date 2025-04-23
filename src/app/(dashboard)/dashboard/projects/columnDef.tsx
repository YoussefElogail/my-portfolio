import { IProject } from "@/types/project";
import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // تأكد من أن لديك مكون Button
import MyDialog from "@/components/shared/shadcn/MyDialog";
import ProjectForm from "@/components/app/dashboard/projects/ProjectForm";
import useDeleteData from "@/hooks/useDeleteData";

const columnHelper = createColumnHelper<IProject>();
export const clumnDef: ColumnDef<IProject>[] = [
  columnHelper.accessor((row) => row.name as unknown, {
    header: "Name",
    cell: (info) => info.getValue() as string,
  }),
  columnHelper.accessor((row) => row.description as unknown, {
    header: "Description",
    cell: (info) => info.getValue() as string,
  }),
  columnHelper.accessor((row) => row.image as unknown, {
    header: "Image",
    cell: (info) => {
      const src = info.getValue() as string;
      return (
        <Image
          src={src}
          alt="project image"
          height={100}
          width={100}
          unoptimized
          loading="lazy"
        />
      );
    },
  }),
  columnHelper.accessor((row) => row.link as unknown, {
    header: "Link",
    cell: (info) => {
      const value = info.getValue() as string | undefined;
      return value ? (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : null;
    },
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
  const { deleteData } = useDeleteData();
  deleteData({ docId: project.id!, collectionName: "projects" });
  // هنا يمكنك إضافة منطق لحذف المشروع (مثلًا، حذف من قاعدة البيانات)
};
