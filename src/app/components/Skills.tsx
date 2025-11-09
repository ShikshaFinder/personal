"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "Node.js",
  "MongoDB",
  "Azure",
  "LangChain",
  "TypeScript",
  "Python",
  "Framer Motion",
  "Tailwind CSS",
  "Supabase",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight underline-gradient">
            Focus & Stack
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Building with modern, composable technologies that ship reliable AI
            products fast.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.05, duration: 0.3 },
                },
              }}
              className="glass-card inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

