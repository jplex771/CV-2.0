import type { Education } from "../../../types/resume";

type EdProps = {
  education: Education
}

export default function EducationList({ education }: EdProps) {
  return (
    <section className="flex justify-center">
      <dl className="grid grid-rows-2 gap-5">
        <div className="grid grid-cols-2 gap-15 content-center border-b-1 border-slate-300">
          <dt>{education.school}</dt>
          <dd>
            GPA:  {education.gpa}
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-10 content-center border-b-1 border-slate-300">
          <dt>{education.degree}</dt>
          <dd>Graduate:  {education.graduation_date}</dd>
        </div>
      </dl>
    </section>
  );
}


