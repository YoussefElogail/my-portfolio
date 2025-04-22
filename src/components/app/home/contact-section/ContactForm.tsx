"use client";

import MyInput from "@/components/shared/shadcn/MyInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { IContact } from "@/types/contact";
import React from "react";
import { useForm } from "react-hook-form";
import MyTextArea from "./MyTextArea";

const inputs = [
  { name: "name", label: "Your Name", type: "text" },
  { name: "phone", label: "Phone Number", type: "phone" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "subject", type: "text" },
  { name: "message", label: "Your Message", type: "textarea" },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContact>();
  const onSubmit = async (data: IContact) => {
    console.log(data);
  };
  return (
    <Card
      className={cn(
        "border-none border-transparent bg-primary-black  shadow-sm shadow-primary-color gap-2 group md:col-span-3  h-fit"
      )}
    >
      <CardContent className="space-y-4 text-lightn">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {inputs.map((input, index) => {
            const fieldName = input.name as keyof IContact;
            const fieldError = errors[fieldName];

            return (
              <React.Fragment key={index}>
                {input.type === "textarea" ? (
                  <>
                    <MyTextArea
                      label={input.label}
                      type={input.type}
                      {...register(fieldName, {
                        required: `${input.label} is required`,
                      })}
                      fieldError={!!fieldError}
                      errMessage={fieldError?.message}
                    />
                  </>
                ) : (
                  <MyInput
                    label={input.label}
                    type={input.type}
                    {...register(fieldName, {
                      required: `${input.label} is required`,
                    })}
                    fieldError={!!fieldError}
                    errMessage={fieldError?.message}
                  />
                )}
              </React.Fragment>
            );
          })}
          <Button
            type="submit"
            className="hover:bg-primary-color bg-secondary-black"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
