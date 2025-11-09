"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Ventures" },
  { href: "#achievements", label: "Milestones" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/40 bg-[rgba(255,255,255,0.9)] backdrop-blur-xl transition-colors dark:border-slate-800/60 dark:bg-[rgba(6,8,20,0.85)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-700 transition-colors dark:text-slate-100"
        >
          <span className="accent-gradient inline-block h-8 w-8 rounded-full opacity-80" />
          <span>Harsh Jani</span>
        </motion.div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 underline-gradient"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

