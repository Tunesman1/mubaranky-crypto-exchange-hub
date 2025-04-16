
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupportedAssets from "@/components/SupportedAssets";
import ExchangeCalculator from "@/components/ExchangeCalculator";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      <Navbar />
      <Hero />
      <SupportedAssets />
      <Features />
      <ExchangeCalculator />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
