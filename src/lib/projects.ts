import fs from "fs";
import path from "path";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
  imageLink?: string;
  features?: ProjectFeature[];
}

export function getProjects(): Project[] {
  const projectsPath = path.join(process.cwd(), "src/data/projects.json");
  const fileContents = fs.readFileSync(projectsPath, "utf8");
  const projects = JSON.parse(fileContents);
  return projects;
}
