export default function Section({title, children}:{title: string; children:React.ReactNode}) {
  // Completed component - use as is
  return (
    <section className="mt-5">
      <h2 className="text-3xl border-l-[5] border-indigo-700 pl-2 mb-3">
        {title}
      </h2>
      {children}
    </section>

  );
}
