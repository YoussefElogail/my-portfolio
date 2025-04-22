import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@radix-ui/react-dropdown-menu";
  import React from "react";
  
  type MyDropdownMenuProps = {
    trigger: React.ReactNode;
    label: string;
    items: { label: string; action: () => void }[];
    className?: string;
  };
  
  const MyDropdownMenu = ({
    trigger,
    items,
    label,
    className,
  }: MyDropdownMenuProps) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className={className}>
          <DropdownMenuLabel className="border-b-1 p-2">{label}</DropdownMenuLabel>
          <DropdownMenuSeparator  />
          {items.map(({ action, label }, i) => (
            <DropdownMenuItem key={i} onSelect={action} className="cursor-pointer capitalize hover:bg-primary-color p-2">
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default MyDropdownMenu;
  