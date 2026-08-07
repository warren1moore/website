"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import DotPattern from "@/components/DotPattern";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-x-clip pt-20 bg-background">
      <DotPattern />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-foreground leading-none tracking-tight max-w-xl whitespace-pre-line overflow-wrap-anywhere min-w-0"
              style={{ transform: "rotate(-2deg)" }}
            >
              {site.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              {site.hero.declaration}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-56 sm:w-64 lg:w-72 xl:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl shadow-black/15 ring-1 ring-border/60"
              style={{ transform: "rotate(1deg)" }}
            >
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200, 169, 106, 0.08) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.04) 100%)",
                }}
              />
              <Image
                src="/book.jpeg"
                alt="Book cover"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
