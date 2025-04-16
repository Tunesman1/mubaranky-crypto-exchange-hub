
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, CheckCircle, HelpCircle } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: "Contact Us",
      description: "Reach out through our contact channels with your exchange needs",
      color: "bg-exchange-purple"
    },
    {
      icon: <Send className="w-10 h-10 text-white" />,
      title: "Send Assets",
      description: "Transfer your assets following our simple instructions",
      color: "bg-exchange-blue"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      title: "Get Paid",
      description: "Receive your exchanged assets in your preferred currency",
      color: "bg-exchange-green"
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-white" />,
      title: "Need Help?",
      description: "Our support team is available 24/7 to assist you",
      color: "bg-exchange-yellow"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-tr from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-exchange-purple to-exchange-purple-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trading with Mubaranky Exchange is fast, simple and secure. Follow these easy steps to complete your transaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Process Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col items-center">
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
              
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-exchange-purple to-purple-600 text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
          
          {/* Connecting Lines - Only visible on desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-exchange-purple/30 to-exchange-purple-light/30"></div>
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-block">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-exchange-purple to-purple-600 hover:shadow-lg hover:shadow-purple-500/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Start Trading Now
            </a>
          </div>
          <p className="text-gray-500 mt-4">No registration required. Start exchanging in minutes!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
