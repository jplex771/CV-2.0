import Nav from "./components/Nav";
import Header from "./components/Header";
import Section from "./components/Section";
import EducationList from "./components/Education";
import Honors from "./components/Honors";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import resume from "@/src/app/resume.json"

type context = {
  thisPage: string
  toPage: string;
  url: string;
}

export default function Home() {
  const context: context = {
    thisPage: "Home",
    toPage: "Contact", 
    url: "/contact"
  };


  const { name, tagline, headshot, contact, education, honors_and_awards, skills, leadership_and_experience, projects } = resume;

  return (
    <main className="bg-white text-black">
      <Nav 
        name={name}
        context={context.thisPage}
      />
      <Header
        name={name}
        headshot={headshot}
        contact={contact}
        tagline={tagline}
      />
       <Section title={"Education"}>
        <EducationList 
          education={education}
        />
      </Section>

      <Section title={"Honors and Awards"}>
        <Honors 
          honors={honors_and_awards}
        />
      </Section>

      <Section title={"Skills"}>
        <Skills 
          skills={skills}
        />
      </Section>

      <Section title={"Leadership and Experience"}>
        <Experience 
          experiences={leadership_and_experience}
        />
      </Section>

       <Section title={"Projects"}>
        <Projects 
          projects={projects}
        />
      </Section>
      <Footer 
        name={name}
        contactUrl={context.url}
        linkedInUrl={contact.linkedin}
      />
    </main>
  );
}
