"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Reveal from "./Reveal";

const contacts = [
  {
    href: "https://www.linkedin.com/in/ryan-majd/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/TheRyanMajd/",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://x.com/theryanmajd",
    label: "X",
    icon: FaXTwitter,
  },
  {
    href: "mailto:ryan1130124@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner text-center">
        <Reveal>
          <h2 className="headline mb-3">Contact</h2>
          <p className="body-lg mb-10 text-[var(--muted)]">
            Who&apos;s callin&apos; my phone?
          </p>
        </Reveal>

        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-4">
          {contacts.map(({ href, label, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 50}>
              <Link
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                aria-label={label}
                className="pressable material-thick flex h-20 w-20 items-center justify-center rounded-[var(--radius-lg)] p-5 transition-colors hover:border-[var(--accent)]"
              >
                <Icon className="h-8 w-8 text-[var(--accent)]" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
