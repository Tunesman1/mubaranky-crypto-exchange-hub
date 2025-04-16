
import React from "react";
import { Zap, TrendingUp, Check } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Fast Payment",
      description:
        "Get instant payments directly to your account. Our system processes transactions within minutes, ensuring you get your funds without delay.",
      color: "bg-exchange-blue"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Amazing Rates",
      description:
        "Enjoy competitive exchange rates that beat the market. We continuously update our rates to ensure you get the best value for your assets.",
      color: "bg-exchange-green"
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: "Tested & Trusted",
      description:
        "Join thousands of satisfied customers who trust us with their exchanges. Our platform is secure, reliable, and has a track record of excellence.",
      color: "bg-exchange-purple"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-exchange-purple to-exchange-purple-light bg-clip-text text-transparent">
              Mubaranky Exchange
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer the best exchange services with unmatched benefits that set us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100 hover:border-gray-200"
            >
              <div className="p-8">
                <div className={`${feature.color} h-16 w-16 rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-exchange-purple to-exchange-purple-light rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start exchanging?</h3>
              <p className="text-white/90">Get the best rates for your digital assets today.</p>
            </div>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-exchange-purple rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
