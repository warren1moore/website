"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Beliefs() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-bleed-ink text-bleed-ink-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-16"
        >
          This Is What
          <br />
          We Commit To.
        </motion.h2>

        <div className="space-y-12">
          {site.mission.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-2xl font-serif border-l-2 border-primary pl-8"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
