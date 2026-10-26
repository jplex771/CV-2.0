import type { Project } from "@/types/resume";
import ProjectItem from "./ProjectItem"
import resume from "@/src/app/resumeData"

type ProjectProp = {
  projects: Project[];
}

export default function Projects({ projects }: ProjectProp) {
  const renderProjects = (projects: Project[]) => {
    return projects.map((project: Project) => (
      <ProjectItem 
        key={project.id}
        project={project}
      />
    ))
  }

  return (
    renderProjects(projects)
  );
}

