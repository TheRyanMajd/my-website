"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import vers from "../../package.json";
import Reveal from "./Reveal";

const profileImage =
  "https://avatars.githubusercontent.com/u/131102091?s=560&v=4";

const roles = [
  "Software Engineer",
  2200,
  "UGA Alum",
  1800,
  "2x Founder",
  1800,
  "Campus Expert",
  1800,
  "Youtuber",
  1800,
  "Tech Director",
  1800,
];

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  return (
    <section className="section">
      <svg
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden"
        focusable="false"
      >
        <filter id="avatar-sharpen">
          <feConvolveMatrix
            divisor="1"
            kernelMatrix="0 -0.2 0 -0.2 1.8 -0.2 0 -0.2 0"
            preserveAlpha="true"
          />
        </filter>
      </svg>
      <div className="section-inner">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="caption mb-3 font-medium uppercase tracking-widest">
              Portfolio
            </p>
            <h1 className="display mb-2">
              Hi, I&apos;m{" "}
              <span className="text-[var(--accent)]">Ryan Majd</span>
            </h1>
            <p
              className="headline mb-6 min-h-[1.15em] whitespace-nowrap text-[var(--muted)]"
              aria-live="polite"
            >
              {reducedMotion ? (
                "Software Engineer"
              ) : (
                <TypeAnimation
                  sequence={roles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[var(--accent)]"
                />
              )}
            </p>
            <p className="body-lg mb-8 max-w-xl text-[var(--muted)]">
              Computer Science graduate from{" "}
              <Link
                href="https://www.uga.edu/"
                target="_blank"
                className="link"
              >
                The University of Georgia
              </Link>
              . Software Engineer at{" "}
              <Link
                href="https://www.linkedin.com/company/lockheed-martin"
                target="_blank"
                className="link"
              >
                Lockheed Martin
              </Link>
              , CTO &amp; Co-founder of{" "}
              <Link
                href="https://travelbyte.net"
                target="_blank"
                className="link"
              >
                TravelByte
              </Link>
              , and founder of{" "}
              <Link
                href="https://ktpGeorgia.com"
                target="_blank"
                className="link"
              >
                KTP at UGA
              </Link>
              . Former Tech Director at{" "}
              <Link
                href="https://ugahacks.com"
                target="_blank"
                className="link"
              >
                UGAHacks
              </Link>
              , and{" "}
              <Link
                href="https://githubcampus.expert/TheRyanMajd/"
                target="_blank"
                className="link"
              >
                GitHub Campus Expert Alumni
              </Link>
              .
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <Link
                href="https://github.com/TheRyanMajd/"
                target="_blank"
                className="pressable material-thick inline-flex h-10 items-center rounded-full px-5 text-sm font-medium"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/ryan-majd/"
                target="_blank"
                className="pressable inline-flex h-10 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                LinkedIn
              </Link>
              <Link
                href="#resume"
                className="pressable material inline-flex h-10 items-center rounded-full px-5 text-sm font-medium"
              >
                Resume
              </Link>
            </div>

            <p className="caption flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--status)]" />
              v{vers.version} — Software Engineer @ Lockheed Martin
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col items-center md:items-end"
          >
            <div className="material-thick overflow-hidden rounded-[var(--radius-lg)] p-1">
              <Image
                alt="Ryan Majd"
                src={profileImage}
                width={560}
                height={560}
                className="rounded-[calc(var(--radius-lg)-4px)]"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxWidth: "280px",
                  height: "auto",
                  filter: "url(#avatar-sharpen) contrast(1.02)",
                }}
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
