import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import MyDialog from "./shadcn/MyDialog";

type TableHeaderProps = {
  title: string;
  handleShowCreate: Dispatch<SetStateAction<boolean>>;
  canCreate?: boolean;
  children?: React.ReactNode;
};

const TableHeader = ({
  title,
  handleShowCreate,
  canCreate,
  children,
}: TableHeaderProps) => {
  return (
    <div className="w-full bg-secondary-black px-2 py-4 rounded-lg flex flex-wrap justify-between items-center capitalize">
      <h2 className="text-3xl">{`${title}s`}</h2>
      {canCreate && (
        <MyDialog
          trigger={
            <Button
              variant="secondary"
              className="capitalize cursor-pointer"
              onClick={() => handleShowCreate((prv) => !prv)}
            >
              create {title}
            </Button>
          }
          dialogTitle={`Create ${title}`}
        >
          {children}
        </MyDialog>
      )}
    </div>
  );
};

export default TableHeader;
