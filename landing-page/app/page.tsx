'use client';
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Carousel from "./components/TestimonialsCarousel";
import { FAQs } from "./constants";
import { TESTIMONIALS } from "./constants";

export default function Home() {
  return (
    <div>

      <section id='navigation'>
        <NavBar />
      </section>

      <section id="hero-section" className="bg-white">
        <Hero />
      </section>

      <section id="how-works-section" className="bg-nice-blue">
        <HowItWorks />
      </section>

      <section id="why-section" className="bg-white-smoke">

      </section>

      <section id="prices-and-services-section">

      </section>

      <section id="testimonials-section" className="bg-nice-blue">
        <div className="block overflow-hidden py-6">
          <Carousel 
          testimonials={TESTIMONIALS}/>
      </div>     
      </section>

      <section id="faqs-section" className="py-6">
        <div className="relative text-center max-w-[1400px] mx-auto px-4">
            
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
