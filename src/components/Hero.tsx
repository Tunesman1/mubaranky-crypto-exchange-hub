
import React from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin, Wallet, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-exchange-purple/10 text-exchange-purple text-sm font-medium mb-2">
              <Wallet size={16} className="mr-2" />
              <span>Secure Exchange Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Partner for{" "}
              <span className="bg-gradient-to-r from-exchange-purple to-exchange-purple-light bg-clip-text text-transparent">
                Digital Assets Exchange
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Exchange Cash App, BTC, ETH, USDT, Skrill, Net-Teller, Perfect Money, 
              Gift Cards, Zelle, Pi and other crypto assets at the best rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-exchange-purple hover:bg-exchange-purple-dark">
                Start Trading Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Exchange Rates
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Bitcoin size={20} className="text-exchange-green" />
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">24/7 Service</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-exchange-blue w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Fast Transfers</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-exchange-yellow w-5 h-5"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">Secure Trading</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-exchange-purple/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-exchange-purple/20 rounded-full filter blur-3xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
            
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Bitcoin", icon: "₿", bg: "bg-orange-100", text: "text-orange-600" },
                  { name: "Ethereum", icon: "Ξ", bg: "bg-blue-100", text: "text-blue-600" },
                  { name: "USDT", icon: "₮", bg: "bg-green-100", text: "text-green-600" },
                  { name: "Cash App", icon: "$", bg: "bg-green-100", text: "text-green-600" },
                  { name: "Skrill", icon: "S", bg: "bg-purple-100", text: "text-purple-600" },
                  { name: "Gift Cards", icon: "🎁", bg: "bg-red-100", text: "text-red-600" }
                ].map((asset, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-full ${asset.bg} ${asset.text} flex items-center justify-center text-xl font-bold mb-2`}>
                      {asset.icon}
                    </div>
                    <p className="text-sm font-medium text-center">{asset.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
