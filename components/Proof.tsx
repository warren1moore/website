"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Proof() {
  return (
    <section className="py-24 md:py-32 bg-bleed-ink text-bleed-ink-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-none mb-6"
        >
          Authors We&rsquo;ve
          <br />
          Worked With.
        </motion.h2>
        <p className="text-lg text-bleed-ink-foreground/60 max-w-lg mb-20">
          Real campaigns. Real authors. Real results.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
          {site.featuredAuthors.map((author, i) => (
            <motion.a
              key={author.name}
              href={author.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group block"
            >
              <div className="aspect-[3/4] relative bg-bleed-ink-foreground/10 overflow-hidden mb-4">
                <Image
                  src={author.imageUrl}
                  alt={author.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm leading-tight">
                {author.name}
              </h3>
              <p className="mt-1 text-xs text-bleed-ink-foreground/50">
                {author.campaignType}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
