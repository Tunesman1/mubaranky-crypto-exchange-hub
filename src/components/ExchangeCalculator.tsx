
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ExchangeCalculator: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("67,245.32");

  // Mock exchange rates (in a real app, these would come from an API)
  const rates = {
    BTC: { USD: 67245.32, ETH: 21.45, USDT: 67245.32 },
    ETH: { USD: 3137.42, BTC: 0.046, USDT: 3137.42 },
    USDT: { USD: 1, BTC: 0.000015, ETH: 0.00031 },
    CASHAPP: { USD: 1, BTC: 0.000015, ETH: 0.00031 },
    SKRILL: { USD: 1, BTC: 0.000015, ETH: 0.00031 },
    PM: { USD: 1, BTC: 0.000015, ETH: 0.00031 },
  };

  const currencies = [
    { value: "BTC", label: "Bitcoin" },
    { value: "ETH", label: "Ethereum" },
    { value: "USDT", label: "Tether" },
    { value: "CASHAPP", label: "Cash App" },
    { value: "SKRILL", label: "Skrill" },
    { value: "PM", label: "Perfect Money" },
    { value: "ZELLE", label: "Zelle" },
    { value: "USD", label: "US Dollar" },
  ];

  const handleCalculate = () => {
    // In a real app, this would use actual conversion rates or API calls
    try {
      const amountNum = parseFloat(amount);
      let convertedAmount = amountNum;
      
      // This is a simple mock conversion
      // In real app, this would use real rates from API
      if (fromCurrency !== toCurrency) {
        if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
          convertedAmount = amountNum * rates[fromCurrency][toCurrency];
        } else if (fromCurrency === "USD" && rates[toCurrency]) {
          // Convert from USD to other currency
          convertedAmount = amountNum / rates[toCurrency]["USD"];
        }
      }
      
      // Format the result
      setResult(convertedAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 8
      }));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Instant Exchange Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Get real-time exchange rates for all your transactions. Calculate how much you'll receive before making an exchange.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-3">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                You Send
              </label>
              <div className="flex space-x-4">
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full"
                />
                <Select
                  value={fromCurrency}
                  onValueChange={(value) => setFromCurrency(value)}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-exchange-purple/10 p-2 rounded-full">
                <ArrowRight className="h-6 w-6 text-exchange-purple" />
              </div>
            </div>

            <div className="md:col-span-3">
              <label htmlFor="result" className="block text-sm font-medium text-gray-700 mb-2">
                You Receive
              </label>
              <div className="flex space-x-4">
                <Input
                  id="result"
                  type="text"
                  value={result}
                  readOnly
                  className="w-full bg-gray-50"
                />
                <Select
                  value={toCurrency}
                  onValueChange={(value) => setToCurrency(value)}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button onClick={handleCalculate} className="w-full bg-exchange-purple hover:bg-exchange-purple-dark">
              Calculate Exchange Rate
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Exchange Rate:</span>
              <span className="font-medium">1 {fromCurrency} = {fromCurrency === toCurrency ? "1" : rates[fromCurrency]?.[toCurrency]?.toLocaleString(undefined, { maximumFractionDigits: 8 }) || "—"} {toCurrency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Time:</span>
              <span className="font-medium">5-15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeCalculator;
