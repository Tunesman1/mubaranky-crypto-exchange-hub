
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupportedAssets from "@/components/SupportedAssets";
import ExchangeCalculator from "@/components/ExchangeCalculator";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrustIndicators from "@/components/TrustIndicators";
import HowItWorks from "@/components/HowItWorks";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="assets">
        <SupportedAssets />
      </div>
      <div id="features">
        <Features />
      </div>
      <HowItWorks />
      <div id="calculator">
        <ExchangeCalculator />
      </div>
      <div id="trust">
        <TrustIndicators />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
