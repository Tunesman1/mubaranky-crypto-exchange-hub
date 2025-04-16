
import React from "react";
import { Zap, TrendingUp, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Fast Payment",
      description:
        "Get instant payments directly to your account. Our system processes transactions within minutes, ensuring you get your funds without delay.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Amazing Rates",
      description:
        "Enjoy competitive exchange rates that beat the market. We continuously update our rates to ensure you get the best value for your assets.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Tested & Trusted",
      description:
        "Join thousands of satisfied customers who trust us with their exchanges. Our platform is secure, reliable, and has a track record of excellence.",
      color: "bg-gradient-to-br from-exchange-purple to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-exchange-purple to-purple-500 bg-clip-text text-transparent">
              Mubaranky Exchange
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            We offer the best exchange services with unmatched benefits that set us apart from the competition.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-exchange-purple to-purple-400 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="p-8">
                <div className={`${feature.color} h-16 w-16 rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-exchange-purple to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start exchanging?</h3>
              <p className="text-white/90">Get the best rates for your digital assets today.</p>
            </div>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white text-exchange-purple rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
