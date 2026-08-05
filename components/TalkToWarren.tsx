"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function TalkToWarren() {
  return (
    <section className="py-24 md:py-32 bg-bleed-ink text-bleed-ink-foreground">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl"
        >
          {site.endCta.heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base px-10 py-5 transition-colors"
          >
            {site.endCta.buttonText}
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
