import { skills, websiteTypes } from "@/data/data";

export const inputs = [
  {
    type: "string",
    name: "name",
    isRequired: {
      create: true,
      edit: true,
    },
    errorMessage: "Name filed is required",
    isEdit: true,
    isCreate: true,
  },
  {
    type: "string",
    name: "description",
    isRequired: {
      create: true,
      edit: true,
    },
    errorMessage: "Description filed is required",
    isEdit: true,
    isCreate: true,
  },
  {
    type: "string",
    name: "link",
    isRequired: {
      create: false,
      edit: false,
    },
    errorMessage: "Description filed is required",
    isEdit: true,
    isCreate: true,
  },
  {
    type: "select",
    name: "websiteType",
    isRequired: {
      create: true,
      edit: true,
    },
    errorMessage: "Website type filed is required",
    isEdit: true,
    isCreate: true,
    options: websiteTypes,
  },
  {
    type: "select",
    name: "technologies",
    isRequired: {
      create: true,
      edit: true,
    },
    errorMessage: "technologies filed is required",
    isEdit: true,
    isCreate: true,
    options: skills,
  },
  {
    type: "file",
    name: "image",
    isRequired: {
      create: true,
      edit: false,
    },
    errorMessage: "Image filed is required",
    isEdit: true,
    isCreate: true,
  },
];
