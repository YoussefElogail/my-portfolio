"use client";
import { inputs } from "@/app/(dashboard)/dashboard/projects/inputs";
import MyInput from "@/components/shared/shadcn/MyInput";
import { MyMultiSelect } from "@/components/shared/shadcn/MyMultiSelect";
import { Button } from "@/components/ui/button";
import useAddData from "@/hooks/useAddData";
import useUpdateData from "@/hooks/useUpdateData";
import useUploadImageToCloudinary from "@/hooks/useUploadImageToCloudinary"; // ✅ بدون الأقواس
import { IProject, IProjectSend } from "@/types/project";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

type ProjectFormProps = {
  data?: IProjectSend;
};

const ProjectForm = ({ data }: ProjectFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IProjectSend>();
  console.log(data);
  useEffect(() => {
    if (data) {
      reset({
        ...data,
        technologies: data.technologies || [],
      });
    }
  }, [data, reset]);

  const { uploadImageToCloudinary } = useUploadImageToCloudinary();
  const { addData } = useAddData<IProject>();
  const { updateData } = useUpdateData();

  const onSubmit = async (formData: IProject) => {
    let imageUrl = "";

    // لو الصورة موجودة ومش سترينج (يعني ده File جديد)
    if (formData.image && typeof formData.image !== "string") {
      const file = formData.image[0];
      if (file) {
        imageUrl = await uploadImageToCloudinary(file);
      }
    } else if (typeof formData.image === "string") {
      imageUrl = formData.image;
    }

    const dataToSend = {
      ...formData,
      image: imageUrl || (data?.image as string),
    };

    if (data) {
      await updateData({
        collectionName: "projects",
        docId: data.id!,
        newData: dataToSend,
      });
    } else {
      await addData({
        collectionName: "projects",
        data: dataToSend,
        reset,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      {inputs
        .filter((input) => (data ? input.isEdit : input.isCreate))
        .map((input) => {
          const fieldError = input.name as keyof IProject;
          return (
            <React.Fragment key={input.name}>
              {input.type === "select" ? (
                <Controller
                  control={control}
                  name={input.name as keyof IProject}
                  rules={{
                    required: !data
                      ? input.isRequired.create
                      : input.isRequired.edit,
                  }}
                  render={({ field }) => (
                    <MyMultiSelect
                      label={input.name}
                      options={input.options || []}
                      value={
                        Array.isArray(field.value)
                          ? field.value.map((v) =>
                              typeof v === "string" ? v : v.value
                            )
                          : []
                      }
                      onChange={(val) => field.onChange(val)}
                    />
                  )}
                />
              ) : (
                <MyInput
                  label={input.name}
                  type={input.type}
                  {...register(input.name as keyof IProject, {
                    required: !data
                      ? input.isRequired.create
                      : input.isRequired.edit,
                  })}
                  errMessage={input.errorMessage}
                  fieldError={!!errors[fieldError]}
                />
              )}
            </React.Fragment>
          );
        })}
      <Button type="submit" className="cursor-pointer ">
        Submit
      </Button>
    </form>
  );
};

export default ProjectForm;
