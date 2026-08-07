import { site } from "@/data/site";

export default function StructuredData() {
  const baseUrl = "https://warrenmoore.cv";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Warren Moore",
    url: baseUrl,
    email: site.brand.email,
    jobTitle: "Book Promotion Specialist",
    description:
      "Warren Moore provides professional book promotion for independent authors, self-published writers, and small publishers.",
    sameAs: [],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Warren Moore Book Promotion",
    url: baseUrl,
    email: site.brand.email,
    description:
      "Professional book promotion agency helping authors increase their book's visibility through strategic campaigns, Amazon optimization, and author branding.",
    areaServed: "Worldwide",
    serviceType: "Book Promotion",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Warren Moore — Book Promotion Agency",
    description:
      "Professional book promotion for independent authors, self-published writers, and small publishers.",
    url: baseUrl,
    about: professionalServiceSchema,
    mainEntity: personSchema,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([webPageSchema, faqSchema, personSchema, professionalServiceSchema]),
      }}
    />
  );
}
