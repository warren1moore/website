import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Warren Moore Book Promotion — Professional Book Marketing",
  description:
    "Professional book promotion for independent authors, self-published writers, and small publishers. Structured, transparent promotion designed to increase your book's visibility.",
  keywords: [
    "book promotion",
    "book marketing",
    "author promotion",
    "Warren Moore",
    "Amazon book promotion",
    "self-published author marketing",
    "book publicity",
  ],
  openGraph: {
    title: "Warren Moore Book Promotion — Professional Book Marketing",
    description:
      "Professional book promotion for independent authors. Structured, transparent promotion designed to increase your book's visibility.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
