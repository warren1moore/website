"use client";

import { useState, type FormEvent, useRef } from "react";
import { Send, Loader2 } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const book = (data.get("book") as string).trim();
    const genre = data.get("genre") as string;
    const purchaseLink = (data.get("purchaseLink") as string).trim();
    const goals = (data.get("goals") as string).trim();
    const message = (data.get("message") as string).trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Book Title: ${book}`,
      `Genre: ${genre}`,
      purchaseLink ? `Purchase Link: ${purchaseLink}` : "",
      "",
      `Promotion Goals:`,
      goals,
      message ? `\nAdditional Message:\n${message}` : "",
      "",
      "---",
      "Submitted via warrenmoorebookpromotion.com",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Book Promotion Inquiry \u2014 ${book}`;
    const mailtoUrl = `mailto:${site.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setLoading(false);
    }, 400);
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-none mb-4">
          {site.contactForm.heading}
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mb-16">
          {site.contactForm.subheading}
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
              >
                Full Name
              </label>
              <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
              >
                Email Address
              </label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
            </div>
            <div>
              <label
                htmlFor="book"
                className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
              >
                Book Title
              </label>
              <input id="book" name="book" type="text" required placeholder="Your Book Title" className={inputClass} />
            </div>
            <div>
              <label
                htmlFor="genre"
                className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
              >
                Genre
              </label>
              <select
                id="genre"
                name="genre"
                required
                defaultValue=""
                className={`${inputClass} appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-no-repeat bg-[right_0_center] pr-6`}
              >
                <option value="" disabled>Select a genre</option>
                {site.contactForm.genres.map((genre) => (
                  <option key={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="purchaseLink"
              className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
            >
              Purchase Link
            </label>
            <input id="purchaseLink" name="purchaseLink" type="url" placeholder="https://amazon.com/your-book" className={inputClass} />
          </div>

          <div>
            <label
              htmlFor="goals"
              className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
            >
              Promotion Goals
            </label>
            <textarea id="goals" name="goals" required rows={3} placeholder="What are you hoping to achieve?" className={`${inputClass} resize-none`} />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3"
            >
              Additional Message
            </label>
            <textarea id="message" name="message" rows={2} placeholder="Anything else we should know." className={`${inputClass} resize-none`} />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed text-primary-foreground font-bold text-base px-10 py-5 transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Opening Email...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Your Book
                </>
              )}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Sent to {site.brand.email}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
