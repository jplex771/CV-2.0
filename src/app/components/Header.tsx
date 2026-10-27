import Image from "next/image";
import type { Contact } from "@/types/resume";
import resume from "@/src/app/resumeData"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type HeaderProps = {
  name: string
  headshot?: string | StaticImport;
  contact: Contact;
  tagline?: string;
}


export default function Header({ name, headshot, contact, tagline }: HeaderProps) {
 
  return (
    <header className="bg-cyan-50 shadow-md shadow-slate-300 border-b-1 border-double border-slate-50 flex flex-col items-center">
      <h1 className="text-3xl">{name}</h1>
      {
        headshot !== undefined ?
        <Image 
          className="rounded-full border-[5] border-stone-100 shadow-lg shadow-slate-300"
          id="profile-pic" 
          src={headshot} 
          width="200" 
          height="300" 
          alt="Headshot of Jean-Pierre de la Reza"/>
        : <></>
      }
      <div className="header-text my-3 mx-2 flex flex-col items-center">
        <p className="address">
          {contact.phone} ◎ {contact.email}
        </p>
        {
          tagline !== undefined ?
          <p className="tagline mx-5 text-center">{tagline}</p>
          : <></>
        }
      </div>
    </header>
  );
}
