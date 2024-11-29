'use client';
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import { FAQs } from "./constants";

export default function Home() {
  return (
    <div>

      <section id='navigation'>
        <NavBar />
      </section>

      <section id="hero-section" className="bg-white">
        <Hero />
      </section>

      <section id="why-section" className="bg-white-smoke">

      </section>

      <section id="how-works-section" className="bg-nice-blue">
        <HowItWorks />
      </section>

      <section id="prices-and-services-section">

      </section>

      <section id="testimonials-section">

      </section>

      <section id="faqs-section" className="py-6">
        <div className="relative text-center max-w-[1400px] mx-auto">
            <h2 className="text-charcoal mb-6">Frequently asked questions</h2>
          
            < FAQ 
            faqItems={FAQs}/>

        </div>
      </section>

      <section id="footer">

      </section>



    </div>
  );
}
