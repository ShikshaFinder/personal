"use client";

import { motion } from "framer-motion";

const ventures = [
  {
    name: "GWSF Ventures Pvt Ltd",
    description:
      "AI & Software Innovation Lab. We build intelligent systems for business and society.",
  },
  {
    name: "Shiksha Finder",
    description:
      "India’s leading education discovery platform connecting schools, students, and coaching institutes.",
  },
  {
    name: "AI Cyber Shield",
    description:
      "AI-based security agent automating vulnerability detection for web and APIs.",
  },
  {
    name: "Binarymaster.tech",
    description:
      "Integrating AI into industries through custom software and consulting, partnering with Flavi Dairy Solution for sector-specific innovation.",
    link: "https://www.flavidairysolution.com/",
  },
];

export function Ventures() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700" />
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight underline-gradient">
              Ventures
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Concept to scale: founding and operating companies that embed AI
              into the fabric of learning, security, and enterprise execution.
            </p>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {ventures.map((venture) => (
            <motion.article
              key={venture.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-card group relative overflow-hidden rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="surface-gradient absolute inset-0" />
              </div>
              <motion.div whileHover={{ x: 4 }} className="relative">
                <h3 className="text-xl font-semibold tracking-tight">
                  {venture.name}
                </h3>
                {venture.link ? (
                  <a
                    href={venture.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-xs font-medium text-blue-600 underline-gradient"
                  >
                    Visit partner site
                  </a>
                ) : null}
              </motion.div>
              <p className="relative mt-3 text-sm text-muted-foreground">
                {venture.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

