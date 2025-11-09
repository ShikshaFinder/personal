"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Selected under SSIP",
    description:
      "₹1,15,702 grant for Shiksha Finder under the Student Startup and Innovation Policy.",
    icon: "✅",
  },
  {
    title: "Smart India Hackathon Finalist",
    description: "Among top 1,800 out of 86,000+ teams nationwide.",
    icon: "🧠",
  },
  {
    title: "AI Cyber Shield Recognition",
    description:
      "Selected among 15 startups out of 3,000+ applicants for a national AI cybersecurity program.",
    icon: "🛡️",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight underline-gradient">
            Milestones
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Signals of progress from building audacious ideas with lean teams and
            persistent execution.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-700/60"
        >
          <div className="absolute left-[-2px] top-1 h-[calc(100%-8px)] w-0.5 bg-gradient-to-b from-slate-200 via-blue-500/40 to-transparent dark:from-slate-700/60 dark:via-blue-400/40" />
          {achievements.map((achievement, index) => (
            <motion.li
              key={achievement.title}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: index * 0.12 },
                },
              }}
              className="relative flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent p-6 dark:via-slate-900/40"
            >
              <div className="absolute -left-12 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl shadow-sm dark:border-slate-700 dark:bg-slate-900">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

