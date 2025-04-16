
import React from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin, Wallet, ArrowRight, BarChart3, Shield, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-exchange-purple/20 to-exchange-purple-light/20 text-exchange-purple text-sm font-medium mb-2 border border-exchange-purple/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Wallet size={16} className="mr-2" />
              <span>Secure Exchange Platform</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Trusted Partner for{" "}
              <span className="bg-gradient-to-r from-exchange-purple to-purple-500 bg-clip-text text-transparent">
                Digital Assets Exchange
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Exchange Cash App, BTC, ETH, USDT, Skrill, Net-Teller, Perfect Money, 
              Gift Cards, Zelle, Pi and other crypto assets at the best rates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-exchange-purple to-purple-600 hover:bg-exchange-purple-dark hover:shadow-lg transition-all duration-300 border-0 group">
                <span>Start Trading Now</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-exchange-purple text-exchange-purple hover:bg-exchange-purple/10">
                View Exchange Rates
              </Button>
            </motion.div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                  <Clock3 size={20} className="text-exchange-green" />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">24/7 Service</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                  <BarChart3 size={20} className="text-exchange-blue" />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Fast Transfers</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm">
                  <Shield size={20} className="text-exchange-yellow" />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Secure Trading</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-exchange-purple/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-exchange-purple/20 rounded-full filter blur-3xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
            
            <motion.div 
              className="relative z-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Bitcoin", icon: "₿", bg: "bg-gradient-to-br from-orange-100 to-orange-200", text: "text-orange-600", delay: 0.1 },
                  { name: "Ethereum", icon: "Ξ", bg: "bg-gradient-to-br from-blue-100 to-blue-200", text: "text-blue-600", delay: 0.2 },
                  { name: "USDT", icon: "₮", bg: "bg-gradient-to-br from-green-100 to-green-200", text: "text-green-600", delay: 0.3 },
                  { name: "Cash App", icon: "$", bg: "bg-gradient-to-br from-green-100 to-green-200", text: "text-green-600", delay: 0.4 },
                  { name: "Skrill", icon: "S", bg: "bg-gradient-to-br from-purple-100 to-purple-200", text: "text-purple-600", delay: 0.5 },
                  { name: "Gift Cards", icon: "🎁", bg: "bg-gradient-to-br from-red-100 to-red-200", text: "text-red-600", delay: 0.6 }
                ].map((asset, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: asset.delay, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                    }}
                  >
                    <div className={`w-10 h-10 rounded-full ${asset.bg} ${asset.text} flex items-center justify-center text-xl font-bold mb-2 shadow-sm`}>
                      {asset.icon}
                    </div>
                    <p className="text-sm font-medium text-center">{asset.name}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Current BTC Price</p>
                    <p className="text-lg font-semibold">$67,245.32</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">24h Change</p>
                    <p className="text-lg font-semibold text-green-500">+2.34%</p>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm text-gray-500">24h Volume</p>
                    <p className="text-lg font-semibold">$31.2B</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
