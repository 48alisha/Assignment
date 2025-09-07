"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  { label: "Who It's For", vintage: "Perfect for balanced, all-level traders looking for consistency and solid growth.", cent: "Designed for beginners ready to step into the trading world with minimal risk.", pro: "Ideal for experienced traders seeking precision, speed, and high-stakes performance." },
  { label: "Initial Capital Requirement", vintage: "$10%", cent: "$10", pro: "$500" },
  { label: "Spread Advantage", vintage: "from 0.2 pips", cent: "from 0.3 pips", pro: "from 0.1 pips" },
  { label: "Trading Fees", vintage: "No Commission", cent: "Zero Commission", pro: "No Commission" },
  { label: "Leverage Capacity", vintage: "1:Unlimited", cent: "1:Unlimited", pro: "1:Unlimited" },
  { label: "Minimum Lot Size", vintage: "0.01", cent: "0.01", pro: "0.01" },
  { label: "Trade Execution Limit", vintage: "200 trades during peak hours", cent: "200 trades during peak hours", pro: "200 trades during peak hours" },
  { label: "Open Position Capacity", vintage: "Unlimited", cent: "Unlimited", pro: "Unlimited" },
  { label: "Stop Out Threshold", vintage: "0%", cent: "0%", pro: "0%" },
  { label: "Margin Call Activation", vintage: "30%", cent: "30%", pro: "30%" },
  { label: "Swap Policy", vintage: "0%", cent: "0%", pro: "0%" },
  { label: "Risk Exposure", vintage: "Moderate", cent: "Low", pro: "High" },
  { label: "Asset Options", vintage: "Forex, Crypto, Stocks, Commodities, Indices", cent: "Forex, Crypto, Stocks, Commodities, Indices", pro: "Forex, Crypto, Stocks, Commodities, Indices" },
];

const accountTypes = [
  {
    name: "Abcd Vintage",
    description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    name: "Abcd Cent", 
    description: "Designed for beginners ready to step into the trading world with minimal risk.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    name: "Abcd Pro",
    description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  }
];

export default function TradingComparisonTable() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Flexible Deposits for Every Trader
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Choose the perfect account type for your trading journey
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-900/50 border-b border-gray-800">
            <div className="p-6 border-r border-gray-800">
              <h3 className="text-white font-semibold text-lg">Features</h3>
            </div>
            {accountTypes.map((account, index) => (
              <motion.div
                key={account.name}
                className={`p-6 border-r border-gray-800 last:border-r-0 ${account.bgColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${account.color} bg-clip-text text-transparent mb-2`}>
                  {account.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {account.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature.label}
                className="grid grid-cols-4 hover:bg-gray-900/30 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + featureIndex * 0.05, duration: 0.5 }}
              >
                {/* Feature Label */}
                <div className="p-6 border-r border-gray-800 bg-gray-900/20">
                  <span className="text-white font-medium">{feature.label}</span>
                </div>
                
                {/* Feature Values */}
                <div className="p-6 border-r border-gray-800">
                  <span className="text-gray-300">{feature.vintage}</span>
                </div>
                <div className="p-6 border-r border-gray-800">
                  <span className="text-gray-300">{feature.cent}</span>
                </div>
                <div className="p-6">
                  <span className="text-gray-300">{feature.pro}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 bg-gray-900/30 border-t border-gray-800">
            <div className="p-6 border-r border-gray-800"></div>
            {accountTypes.map((account, index) => (
              <motion.div
                key={account.name}
                className="p-6 border-r border-gray-800 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
              >
                <Button
                  className={`w-full bg-gradient-to-r ${account.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  Start Trading
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            All accounts include 24/7 customer support and advanced trading tools
          </p>
        </motion.div>
      </div>
    </div>
  );
}