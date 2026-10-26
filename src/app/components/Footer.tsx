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
    <footer>
      <span>&copy;</span>
      <span><Link className="nav-text" href={contactUrl}>{name}</Link></span>
      <span>
        <Link 
          role="link"
          className="nav-text" 
          href={linkedInUrl} 
          target="_blank" 
          rel="noopener noreferrer">
            LinkedIn <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </span>
  </footer>
  );
}
