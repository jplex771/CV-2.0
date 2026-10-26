import type { ExperienceItem } from "@/types/resume";
import Link from "next/link";
import resume from "@/src/app/resumeData"

type ExpProps = {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExpProps) {

  const experienceList = (experiences: ExperienceItem[]) => {
    return experiences.map((experience) => (
      <div key={experience.id}>
        <h4>{}experience.location</h4>
        <dt>{experience.position}</dt>
        <dd>{experience.date}</dd>
        {experience.link !== undefined 
          ? (<dd><Link href={experience.link}>{experience.location}</Link></dd>)
          : (<span></span>)}
      </div>
    ));
  }

  
  return (
    <section>
      <dl>
          {experienceList(experiences)}
      </dl>
    </section>
  );
}
