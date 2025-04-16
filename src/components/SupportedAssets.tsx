
import React from "react";
import { Bitcoin, CreditCard, Gift } from "lucide-react";

const SupportedAssets: React.FC = () => {
  const assets = [
    {
      category: "Cryptocurrencies",
      items: [
        { name: "Bitcoin (BTC)", icon: <Bitcoin className="h-6 w-6" /> },
        { name: "Ethereum (ETH)", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M11.944 17.97L4.58 13.62 11.943 24 19.218 13.62l-7.275 4.35zm.056-24L4.7 12.223l7.3 4.32 7.3-4.32L12 0z" /></svg> },
        { name: "Tether (USDT)", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 12.5c-2.998 0-5.471-.015-7.037-.06-1.24-.036-2.163-.968-2.163-2.157V7.11h18.4v3.173c0 1.19-.928 2.12-2.164 2.157-1.565.045-4.038.06-7.036.06zm-5.489-.217h10.978V17.5H6.511v-5.217zm5.489-6.25c4.493 0 8.337-.026 9.841-.061h.004c.096-.003.173-.09.173-.18 0-1.107-.92-2.011-2.052-2.011-1.304 0-3.539-.031-7.966-.031s-6.662.031-7.966.031c-1.132 0-2.052.904-2.052 2.011 0 .09.077.177.173.18h.004c1.504.035 5.348.061 9.841.061z" /></svg> },
        { name: "Pi Network", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M8 14h8" /><path d="M12 10v8" /><path d="M12 6v1" /></svg> }
      ]
    },
    {
      category: "Payment Services",
      items: [
        { name: "Cash App", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
        { name: "Skrill", icon: <CreditCard className="h-6 w-6" /> },
        { name: "Perfect Money", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
        { name: "Net-Teller", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M7 8V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" /><path d="M12 14v2" /></svg> },
        { name: "Zelle", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16.7 8a3 3 0 0 0-2.7-2H3a2 2 0 0 0 0 4h10a3 3 0 0 1 0 6H6.3a3 3 0 0 1-2.6-2" /><path d="M15 22l5-5" /><path d="M20 22l-5-5" /></svg> }
      ]
    },
    {
      category: "Gift Cards",
      items: [
        { name: "Amazon Gift Cards", icon: <Gift className="h-6 w-6" /> },
        { name: "iTunes Gift Cards", icon: <Gift className="h-6 w-6" /> },
        { name: "Google Play Gift Cards", icon: <Gift className="h-6 w-6" /> },
        { name: "Steam Gift Cards", icon: <Gift className="h-6 w-6" /> }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supported Assets
          </h2>
          <p className="text-lg text-gray-600">
            We support a wide range of digital assets and payment methods, making it easy to exchange whatever you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 text-exchange-purple">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((asset, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="mr-3 text-exchange-purple">
                        {asset.icon}
                      </div>
                      <span>{asset.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">
            Don't see what you're looking for?
          </p>
          <a href="#contact" className="text-exchange-purple font-medium hover:underline">
            Contact us for custom exchanges
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportedAssets;
