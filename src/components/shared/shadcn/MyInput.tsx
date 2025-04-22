import { Input } from "@/components/ui/input";
import { InputProps } from "@/types/components/inputProps";
import React from "react";

type MyInputProps = InputProps & React.ComponentProps<typeof Input>;
const MyInput = ({
  label,
  type,
  errMessage,
  fieldError,
  className,
  ...props
}: MyInputProps) => {
  return (
    <>
      <Input
        type={type}
        placeholder={label}
        {...props}
        className={`border-secondary-black focus-visible:ring-primary-color  ${className}`}
      />
      {}
      {fieldError && <span className="text-sm text-red-500">{errMessage}</span>}
    </>
  );
};

export default MyInput;
