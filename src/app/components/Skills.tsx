import resume from "@/src/app/resumeData"

type SkillsProps = {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  

  return (
    <ul className="grid">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
