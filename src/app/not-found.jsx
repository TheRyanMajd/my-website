import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-4">
      <div className="material-thick max-w-md rounded-[var(--radius-lg)] p-8 text-center">
        <h1 className="headline mb-3">Page not found</h1>
        <p className="body-lg mb-8 text-[var(--muted)]">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link
          href="/"
          className="pressable inline-flex h-10 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
