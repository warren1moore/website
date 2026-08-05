"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none mb-6"
        >
          The Process.
        </motion.h2>
        <p className="text-lg text-muted-foreground max-w-lg mb-20">
          A clear path from submission to final report.
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {site.process.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative"
              >
                <div className="hidden lg:block absolute -top-2 left-0 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10" />
                <span className="block font-serif text-5xl sm:text-6xl text-primary mb-4 tabular-nums">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
