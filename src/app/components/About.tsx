"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "I’m Harsh Jani — Founder & CEO of GWSF Ventures Pvt Ltd.",
  "I build companies that merge AI with human purpose. From creating Shiksha Finder, an AI-powered education discovery platform, to developing AI Cyber Shield, an autonomous cybersecurity agent — my work lies at the intersection of technology, empathy, and impact.",
  "I believe that understanding is ecstasy — and technology is how we get there.",
];

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-transparent via-slate-200/40 to-transparent dark:via-indigo-500/20" />
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700" />
          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            About
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-slate-300 via-transparent dark:via-transparent" />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-5"
        >
          {paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={item}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

