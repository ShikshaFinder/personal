"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/shikshaFinder" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshjani" },
  { label: "Email", href: "mailto:harsh@aicybershield.tech" },
  { label: "Phone", href: "tel:+917984140706" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-12 overflow-hidden bg-[#060818] py-16 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="accent-gradient absolute inset-0 opacity-20 blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-5xl flex-col gap-8 px-6 sm:px-12 lg:px-24"
      >
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Let’s build what matters.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            I build technologies that make people more capable, not replace
            them. Reach out for aligned collaborations, product strategy, or to
            explore partnerships with GWSF Ventures.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-200/90">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="underline-gradient relative inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-white/25"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Harsh Jani. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}

