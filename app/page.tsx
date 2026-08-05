import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Beliefs from "@/components/Beliefs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import TalkToWarren from "@/components/TalkToWarren";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Beliefs />
        <Services />
        <HowItWorks />
        <Proof />
        <TalkToWarren />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
