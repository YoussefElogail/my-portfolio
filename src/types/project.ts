export interface IProject {
  id?: string;
  name: string;
  description: string;
  link?: string;
  image: string;
}

export interface IProjectSend extends IProject {
  technologies?: {
    label: string;
    value: string;
  }[];
  websiteType?: {
    label: string;
    value: string;
  }[];
}

export interface IProjectDetails extends IProject {
  name: string;
  description: string;
  image: string;
  technologies?: string[];
  link?: string;
  websiteType?: string[];
}
