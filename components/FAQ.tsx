import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none mb-16">
          Questions.
        </h2>

        <Accordion className="w-full">
          {site.faq.map((item, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-6 text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
