"use client";

import Link from "next/link";
import resumeData from "@/src/app/resumeData";


type NavProps = { // context
    name: string;
    context: string
}

/* pass a prop to indicate whether to render the link to Contact or About */
export default function Nav({ name, context }: NavProps) {
    const homePage = "home";

    return (
        <nav className="bg-slate-900 text-white p-4 shadow-md shadow-slate-300 flex justify-between">
            <p className="nonclickable-in-nav ">{resumeData.name}</p>
            <p>
                <Link 
                    className="nav-text bg-slate-800 text-white p-2 hover:bg-slate-600 transition-[500]" 
                    href={context.toLocaleLowerCase() == homePage ? "/contact" : "/"}>
                        {context.toLowerCase() == homePage ? "Contact" : "About"} {name}
                </Link>
            </p>
        </nav>
    );
}
