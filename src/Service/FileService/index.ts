import { Attributes, Skill } from "../../Model/ParametersType";

export type FileData = {
  name: string;
  skills: Skill[];
  attributes: Attributes;
};

export const createURLBlob = (data: FileData): string => {
  const jsonData: string = JSON.stringify(data);
  const blob: Blob = new Blob([jsonData], { type: "application/json" });
  return URL.createObjectURL(blob);
};
