import Link from "next/link";

export default function Footer() {
  return (
    <footer className="material border-t border-[var(--border)]">
      <div className="section-inner flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <p className="caption">
          © {new Date().getFullYear()} Ryan Majd. All rights reserved.
        </p>
        <nav className="flex gap-5">
          <Link href="https://www.linkedin.com/in/ryan-majd/" className="caption link">
            LinkedIn
          </Link>
          <Link href="https://github.com/TheRyanMajd/" className="caption link">
            GitHub
          </Link>
          <Link href="mailto:ryan1130124@gmail.com" className="caption link">
            Email
          </Link>
        </nav>
      </div>
    </footer>
  );
}
