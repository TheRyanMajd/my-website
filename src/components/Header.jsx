"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const profileImage =
  "https://avatars.githubusercontent.com/u/131102091?s=560&v=4";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "#resume", label: "Resume" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[var(--shadow)]" : ""
      }`}
    >
      <div className="material border-b border-[var(--border)]">
        <div className="section-inner flex h-14 items-center justify-between px-4 md:px-6">
          <svg
            aria-hidden="true"
            className="absolute h-0 w-0 overflow-hidden"
            focusable="false"
          >
            <filter id="header-avatar-sharpen">
              <feConvolveMatrix
                divisor="1"
                kernelMatrix="0 -0.2 0 -0.2 1.8 -0.2 0 -0.2 0"
                preserveAlpha="true"
              />
            </filter>
          </svg>
          <Link
            href="/#"
            aria-label="Back to top"
            className="pressable flex items-center"
          >
            <Image
              alt="Ryan Majd"
              src={profileImage}
              width={36}
              height={36}
              className="rounded-full md:hidden"
              style={{
                filter: "url(#header-avatar-sharpen) contrast(1.02)",
              }}
            />
            <span className="title hidden text-base font-semibold tracking-tight md:inline">
              Ryan Majd
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pressable rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
