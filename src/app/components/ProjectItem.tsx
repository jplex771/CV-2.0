import Image from "next/image";
import type { Project } from "@/types/resume";
import type { Point } from "@/types/resume"

type ProjItemProps = {
    project: Project
}

export default function ProjectItem({ project }: ProjItemProps) {
    return(
        <div className="card">
            <Image src={project.image} width="200" height="200" alt={project.title}/>
            <h3>{project.title}</h3>
            <ul>
                {
                    project.descr.map((descrPoint: Point) => (
                        <li key={descrPoint.id}>{descrPoint.point}</li>
                    ))
                }
            </ul>
        </div>
    );
}