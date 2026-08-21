"use client";

import Link from "next/link";
import Reveal from "./Reveal";

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" ry="2" />
      <line x1="4" y1="5" x2="20" y2="5" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

export default function Resume() {
  return (
    <section className="section">
      <div id="resume" className="section-inner">
        <Reveal>
          <div className="material-thick mx-auto max-w-2xl rounded-[var(--radius-lg)] p-8 text-center md:p-12">
            <h2 className="headline mb-3">Resume</h2>
            <p className="body-lg mb-8 text-[var(--muted)]">
              Professional experience, leadership, and qualifications.
            </p>
            <Link
              href="https://docs.google.com/document/d/12og3HniuDy5Nqm0LpAfb5dOaV5B-k4jn/edit?usp=sharing&ouid=102048050812793693879&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="pressable inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <BookIcon />
              View on Google Docs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
