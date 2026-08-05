"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import DotPattern from "@/components/DotPattern";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-background">
      <DotPattern />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none tracking-tight max-w-4xl whitespace-pre-line"
          style={{ transform: "rotate(-2deg)" }}
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          {site.hero.declaration}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base px-10 py-5 transition-colors"
          >
            {site.hero.primaryCta}
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#mission"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {site.hero.secondaryCta} &darr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
