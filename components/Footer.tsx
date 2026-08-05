import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="py-16 bg-bleed-ink text-bleed-ink-foreground">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <div>
            <a
              href="#"
              className="font-serif font-bold text-lg tracking-tight hover:text-primary transition-colors"
            >
              {site.brand.name}
            </a>
            <p className="mt-2 text-sm text-bleed-ink-foreground/50 max-w-xs leading-relaxed">
              Professional book promotion for authors who believe their work deserves to be found.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-bleed-ink-foreground/50">
            <a href="#mission" className="hover:text-bleed-ink-foreground transition-colors">Commitments</a>
            <a href="#services" className="hover:text-bleed-ink-foreground transition-colors">Services</a>
            <a href="#process" className="hover:text-bleed-ink-foreground transition-colors">Process</a>
            <a href="#faq" className="hover:text-bleed-ink-foreground transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-bleed-ink-foreground transition-colors">Contact</a>
            <a href={`mailto:${site.brand.email}`} className="hover:text-primary transition-colors">
              {site.brand.email}
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs text-bleed-ink-foreground/30">
          &copy; {new Date().getFullYear()} {site.brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
