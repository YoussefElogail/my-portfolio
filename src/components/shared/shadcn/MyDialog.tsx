import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import React from "react";
  
  type MyDialogProps = {
    trigger: React.ReactNode;
    dialogTitle?: string;
    children: React.ReactNode;
    className?: string;
  } & React.ComponentProps<typeof Dialog>;
  
  const MyDialog = ({
    className,
    children,
    trigger,
    dialogTitle,
    ...props
  }: MyDialogProps) => {
    return (
      <Dialog  {...props}>
        <DialogTrigger >{trigger}</DialogTrigger>
        <DialogContent className={className}>
          <DialogHeader>
            {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default MyDialog;
  