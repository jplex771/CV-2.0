import type { Honor } from "@/types/resume";
import resumeData from "@/src/app/resumeData"

type HonorsProps = {
  honors: Honor[]
}

export default function Honors({ honors }: HonorsProps) {

  const honorsList = (honors: Honor[]) => {
      return honors.map((honor) => (
        <div key={honor.id}>
          <dt>{honor.honor}</dt>
          <dd>{honor.date}</dd>
        </div>
      ));
    }

  return (
    <section>
      <dl>
          {honorsList(honors)}
      </dl>
  </section>
  );
}
