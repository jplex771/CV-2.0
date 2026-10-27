"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import resumeData from "@/src/app/resumeData"

type FooterProp = {
  name: string;
  contactUrl: string;
  linkedInUrl: string;
}

export default function Footer({ name, contactUrl, linkedInUrl }: FooterProp) {

  return (
    <footer className="bg-slate-900 text-white py-4 flex justify-center gap-3">
      <span>&copy;</span>
      <span>
        <Link 
          className="nav-text bg-slate-800 text-white p-2 hover:bg-slate-600 transition-[500]" 
          href={contactUrl}>
            {name}
        </Link>
      </span>
      <span>
        <Link 
          role="link"
          className="nav-text bg-slate-800 text-white p-2 hover:bg-slate-600 transition-[500]" 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer">
            LinkedIn <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </span>
  </footer>
  );
}
