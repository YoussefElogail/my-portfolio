"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type MyMultiSelectProps = {
  label?: string;
  options: Option[];
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
  className?: string;
};

export function MyMultiSelect({
  label,
  options,
  value = [],
  onChange,
  error,
  className,
}: MyMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleValue = (val: string, checked: boolean) => {
    if (checked) {
      onChange([...value, val]);
    } else {
      onChange(value.filter((v) => v !== val));
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {label && <Label className="mb-1 block capitalize">{label}</Label>}

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left",
              value.length === 0 && "text-muted-foreground",
              error && "border-destructive"
            )}
          >
            {value.length > 0
              ? options
                  .filter((opt) => value.includes(opt.value))
                  .map((opt) => opt.label)
                  .join(", ")
              : "Select options"}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-72 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() =>
                toggleValue(option.value, !value.includes(option.value))
              }
            >
              <Checkbox
                id={option.value}
                checked={value.includes(option.value)}
                onCheckedChange={() =>
                  toggleValue(option.value, !value.includes(option.value))
                }
              />
              <Label htmlFor={option.value}>{option.label}</Label>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
}
