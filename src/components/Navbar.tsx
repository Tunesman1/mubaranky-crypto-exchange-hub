
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Handle active section tracking
      const sections = [
        { id: "hero", offset: 0 },
        { id: "assets", offset: 300 },
        { id: "features", offset: 900 },
        { id: "calculator", offset: 1500 },
        { id: "trust", offset: 2100 },
        { id: "testimonials", offset: 2700 },
        { id: "contact", offset: 3300 },
      ];
      
      const scrollPosition = window.scrollY;
      
      // Find the current active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarClasses = `fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
    scrolled 
      ? "bg-white/95 shadow-md py-2" 
      : "bg-transparent py-4"
  }`;

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Assets", href: "#assets", id: "assets" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Exchange", href: "#calculator", id: "calculator" },
    { name: "Trust", href: "#trust", id: "trust" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <motion.nav 
      className={navbarClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-exchange-purple to-exchange-purple-light bg-clip-text text-transparent">
            MUBARANKY EXCHANGE
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative group transition-colors ${
                activeSection === item.id 
                  ? "text-exchange-purple font-semibold" 
                  : "text-gray-700 hover:text-exchange-purple"
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              {item.name}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-exchange-purple transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Button className="bg-gradient-to-r from-exchange-purple to-purple-600 hover:shadow-lg transition-all duration-300 border-0">
              Start Trading
            </Button>
          </motion.div>
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
        <motion.div 
          className="md:hidden bg-white border-t border-gray-100 px-4 py-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`py-2 transition-colors ${
                  activeSection === item.id 
                    ? "text-exchange-purple font-semibold" 
                    : "text-gray-700 hover:text-exchange-purple"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-exchange-purple to-purple-600 hover:bg-exchange-purple-dark w-full">
              Start Trading
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
