"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none mb-20"
        >
          What We Do.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {site.services.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="block font-serif text-5xl sm:text-6xl text-primary mb-4 tabular-nums">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
