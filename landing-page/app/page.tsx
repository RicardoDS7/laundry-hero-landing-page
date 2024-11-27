import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>

      <section id='navigation'>
        <NavBar />
      </section>

      <section id="hero-section" className="bg-white-smoke">
        <Hero />
      </section>

      <section id="why-section">

      </section>

      <section id="how-works-section" className="bg-nice-blue bg-[url('./images/lying-on-couch.png')] bg-scroll bg-no-repeat bg-[right_-120px] h-full">
        <HowItWorks />
      </section>

      <section id="trust-credibility-section">
        <Hero />
      </section>

      <section id="trust-credibility-section">

      </section>

      <section id="footer">

      </section>



    </div>
  );
}
