import { Textarea } from "@/components/ui/textarea";
import { InputProps } from "@/types/components/inputProps";
import React from "react";

type MyTextAreaProps = InputProps & React.ComponentProps<typeof Textarea>;

const MyTextArea = ({
  label,
  type,
  fieldError,
  errMessage,
  className,
  ...props
}: MyTextAreaProps) => {
  return (
    <>
      <Textarea
        placeholder={label}
        {...props}
      
        className={`border-secondary-black focus-visible:ring-primary-color ${className}`}
      />
      {fieldError && <span className="text-sm text-red-500">{errMessage}</span>}
    </>
  );
};

export default MyTextArea;
