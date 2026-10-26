import type { Education } from "../../../types/resume";

type EdProps = {
  education: Education
}

export default function EducationList({ education }: EdProps) {
  return (
    <section>
      <dl>
          <dt>{education.school}</dt>
          <dd>{education.gpa}</dd>
          <dt>{education.degree}</dt>
          <dd>{education.graduation_date}</dd>
      </dl>
    </section>
  );
}


