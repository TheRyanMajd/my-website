"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  linkHref,
  loading,
  year,
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className="material-thick group overflow-hidden rounded-[var(--radius-lg)]"
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <Link href={linkHref} target="_blank" className="block" prefetch={false}>
        {imageUrl && (
          <div className="relative h-40 overflow-hidden">
            <Image
              alt={`Screenshot of ${title}`}
              src={imageUrl}
              fill
              loading={loading}
              sizes="(min-width: 1024px) 23rem, (min-width: 640px) 30rem, 100vw"
              className={`object-cover ${reducedMotion ? "" : "transition-transform duration-500 ease-out group-hover:scale-[1.02]"}`}
            />
          </div>
        )}
        <div className="p-5">
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <h3 className="title text-base">{title}</h3>
            <span className="caption shrink-0 font-medium text-[var(--accent)]">
              {year}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
