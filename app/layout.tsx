import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://warrenmoorebookpromotion.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Warren Moore — Book Promotion Agency",
    template: "%s | Warren Moore Book Promotion",
  },
  description:
    "Warren Moore provides professional book promotion for independent authors, self-published writers, and small publishers. Strategic campaigns, Amazon visibility, author branding — structured and transparent promotion designed to increase your book's visibility.",
  keywords: [
    "Warren Moore",
    "Warren Moore book promotion",
    "book promotion",
    "book marketing",
    "author promotion",
    "Amazon book promotion",
    "self-published author marketing",
    "book publicity",
    "book launch promotion",
    "author branding",
  ],
  authors: [{ name: "Warren Moore" }],
  creator: "Warren Moore",
  publisher: "Warren Moore Book Promotion",
  applicationName: "Warren Moore Book Promotion",
  category: "Book Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Warren Moore — Book Promotion Agency",
    description:
      "Professional book promotion for independent authors. Structured, transparent promotion designed to increase your book's visibility.",
    url: siteUrl,
    siteName: "Warren Moore Book Promotion",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Warren Moore Book Promotion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warren Moore — Book Promotion Agency",
    description:
      "Professional book promotion for independent authors. Structured, transparent promotion designed to increase your book's visibility.",
    images: ["/og-image.png"],
  },
  verification: {},
  appleWebApp: {
    title: "Warren Moore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
