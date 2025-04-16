
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Lock } from "lucide-react";

const TrustIndicators: React.FC = () => {
  const trustFactors = [
    {
      icon: <Shield className="w-12 h-12 text-exchange-purple mb-4" />,
      title: "100% Secure",
      description: "Your transactions are protected by advanced security protocols and encryption"
    },
    {
      icon: <Clock className="w-12 h-12 text-exchange-blue mb-4" />,
      title: "Fast Payments",
      description: "Receive your payments in record time, usually within 5-15 minutes"
    },
    {
      icon: <Award className="w-12 h-12 text-exchange-yellow mb-4" />,
      title: "Best Rates",
      description: "We guarantee the most competitive rates in the market, updated in real-time"
    },
    {
      icon: <Lock className="w-12 h-12 text-exchange-green mb-4" />,
      title: "Licensed & Regulated",
      description: "We operate under strict regulatory compliance for your peace of mind"
    }
  ];

  return (
    <section id="trust" className="py-20 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Mubaranky Exchange?</h2>
          <div className="w-24 h-1 bg-exchange-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience in the digital asset exchange industry, we've earned the trust 
            of thousands of customers worldwide. Here's why you should choose us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 hover:border-exchange-purple/30 transition-all duration-300 hover:shadow-exchange-purple/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col items-center text-center">
                {factor.icon}
                <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-exchange-purple/10 to-exchange-purple-light/10 p-8 rounded-2xl shadow-inner text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Commitment to You</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We strive to provide the most reliable, secure, and efficient exchange service 
            for all your digital asset needs. Our team works around the clock to ensure 
            your transactions are processed quickly and securely.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
