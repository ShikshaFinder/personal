"use client";

import { motion } from "framer-motion";
import { useTheme } from "../providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
      className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-muted transition"
    >
      <span aria-hidden>{theme === "dark" ? "☀️" : "🌙"}</span>
    </motion.button>
  );
}

