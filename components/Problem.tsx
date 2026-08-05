"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-bleed-ink text-bleed-ink-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight"
        >
          {site.problem.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 text-lg sm:text-xl leading-relaxed max-w-2xl"
        >
          {site.problem.body}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 border-l-2 border-primary/40 pl-8"
        >
          <p className="font-serif text-2xl sm:text-3xl leading-relaxed">
            &ldquo;{site.problem.quote}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
