'use client';
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Carousel from "./components/TestimonialsCarousel";
import { FAQs } from "./constants";
import { TESTIMONIALS } from "./constants";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ValueProposition from "./components/ValueProposition";

export default function Home() {
  return (
    <div>

      <section id='navigation'>
        <NavBar />
      </section>

      <section id="hero-section" className="bg-white">
        <Hero />
      </section>

      <section id="how-it-works-section" className="bg-nice-blue">
        <HowItWorks />
      </section>

      <section id="prices-and-services-section" className="py-14">
        <Pricing />
      </section>

      <section id="why-section" className="bg-white py-14">
        <ValueProposition />
      </section>

      <section id="testimonials-section" className="bg-nice-blue">
        <div className="block overflow-hidden py-14">
          <Carousel 
          testimonials={TESTIMONIALS}/>
      </div>     
      </section>

      <section id="faqs-section" className="py-14">
        <div className="relative text-center max-w-[1400px] mx-auto px-4">
            
            <h2 className="text-charcoal mb-6">Frequently asked questions</h2>
          
            < FAQ 
            faqItems={FAQs}/>

        </div>
      </section>

      <section id="footer" className="bg-white">
        <Footer />
      </section>



    </div>
  );
}
