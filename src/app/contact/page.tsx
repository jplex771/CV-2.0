"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react'

import Nav from "@/src/app/components/Nav";
import Footer from "@/src/app/components/Footer";
import Header from "@/src/app/components/Header";
import resume from "@/src/app/resume.json"

type context = {
    thisPage: string
    toPage: string;
    url: string;
}

type ContactFormData = {
    name: string;
    email: string;
    message: string;
}

const { name, contact } = resume

export default function Contact() {
    const context:context = {
        thisPage: "Contact",
        toPage: "About",
        url: "/"
    }
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    }

    return (
        <main>
            <Nav 
                name={name}
                context={context.thisPage}
            />
            <Header
              name={name}
              contact={contact}
            />
            <hr/>
            <form 
                className="one-col" 
                action="https://formsubmit.co/1aebbc33fe43890a28fa0364bc14a7a1" 
                method="POST">
                <label htmlFor="name">Name:</label>
                <input 
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required 
                />
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    type="email" 
                    name="email" 
                    onChange={handleChange}
                    required 
                />
                <label>Message:</label>
                <textarea
                    name="message"
                    rows={6}
                    cols={45}
                    placeholder="Type message here..."
                    maxLength={500}
                />
                <button type="submit">Send</button>
            </form>

            <Footer 
              name={name}
              contactUrl={context.url}
              linkedInUrl={contact.linkedin}
            />
        </main>
    )
}
