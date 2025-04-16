
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-exchange-purple to-exchange-purple-light bg-clip-text text-transparent">
            MUBARANKY EXCHANGE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-exchange-purple transition-colors">
            Services
          </a>
          <a href="#features" className="text-gray-700 hover:text-exchange-purple transition-colors">
            Features
          </a>
          <a href="#calculator" className="text-gray-700 hover:text-exchange-purple transition-colors">
            Exchange
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-exchange-purple transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-exchange-purple transition-colors">
            Contact
          </a>
          <Button className="bg-exchange-purple hover:bg-exchange-purple-dark">
            Start Trading
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2 animate-fade-in">
          <div className="flex flex-col space-y-4 py-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-exchange-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-exchange-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#calculator"
              className="text-gray-700 hover:text-exchange-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Exchange
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-exchange-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-exchange-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-exchange-purple hover:bg-exchange-purple-dark w-full">
              Start Trading
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
