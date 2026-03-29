import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Products from "./components/Products";
import Sourcing from "./components/Sourcing";
import MoneyTransfer from "./components/MoneyTransfer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy to-navy-light overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Products />
        <Sourcing />
        <MoneyTransfer />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
