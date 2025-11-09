"use client";

import { motion } from "framer-motion";
export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[85vh] flex-col items-center justify-center gap-12 overflow-hidden px-6 py-32 text-center sm:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 opacity-90" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex max-w-3xl flex-col items-center gap-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.4em] text-muted"
        >
          Harsh Jani
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-6xl"
        >
          Founder building human-centered AI ventures.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted"
        >
          Understanding is Ecstasy
        </motion.p>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I build thoughtful, impact-first companies across AI, cybersecurity,
          and education — crafting tools that quietly empower people and
          organizations to do their best work.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="accent-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/15"
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted"
        >
          Contact
        </motion.a>
      </motion.div>
    </section>
  );
}

