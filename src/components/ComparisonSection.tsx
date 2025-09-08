"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  const features = [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options",
  ];

  const plans = [
    {
      name: "Abcd Vintage",
      description:
        "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      values: [
        "",
        "10%",
        "from 0.2 pips",
        "No Commission",
        "1-Unlimited",
        "0.01",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "Moderate",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
    {
      name: "Abcd Cent",
      description:
        "Designed for beginners ready to step into the trading world with minimal risk.",
      values: [
        "",
        "$10",
        "from 0.3 pips",
        "Zero Commission",
        "1-Unlimited",
        "Same",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "Low",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
    {
      name: "Abcd Pro",
      description:
        "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      values: [
        "",
        "$500",
        "from 0.1 pips",
        "No Commission",
        "1-Unlimited",
        "Same",
        "200 trades during peak hours",
        "Unlimited",
        "0%",
        "30%",
        "0%",
        "High",
        "Forex, Crypto, Stocks, Commodities, Indices",
      ],
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-gray-300 text-sm font-light border border-blue-500/20 rounded-full py-2 px-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Compare Plans
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Compare your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abcd
            </span>{" "}
            plan
          </motion.h2>
          <motion.p
            className="text-[#C0C1C3] text-lg font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Flexible Deposits for Every Trader
          </motion.p>
        </motion.div>
      </div>
      {/* Comparison Table */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[200px_1fr_1fr_1fr]
 gap-4 items-start"
      >
        {/* Left Feature Column */}
        <div className="space-y-4 text-gray-400 flex flex-col items-center sm:items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-[#a7a8aa] text-sm font-semibold border-b border-[#1C0B22] pb-3 last:border-none text-center sm:text-left"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Plans Columns */}
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {index === 1 ? (
              // Middle box with rotating gradient border
              <div className="relative p-[2px] rounded-2xl overflow-hidden">
                {/* Rotating gradient border */}
                <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />

                {/* Actual Box */}
                <div className="relative z-10 bg-gradient-to-br from-[#000000] to-[#1B0A21] rounded-2xl p-8 shadow-lg flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-2 text-center text-sm">
                    {plan.description}
                  </p>
                  <ul className="w-full">
                    {plan.values.map((value, i) => (
                      <li
                        key={i}
                        className="py-3 text-center text-white text-sm font-medium border-b border-gray-700 last:border-none"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-6 px-5 py-2 text-white text-sm rounded-lg font-medium mx-auto block hover:opacity-90 transition"
                    style={{
                      background:
                        "linear-gradient(212deg, #9f8bcf 0%, rgb(98, 66, 165) 100%)",
                    }}
                  >
                    Start Trading
                  </button>
                </div>
              </div>
            ) : (
              // Normal boxes
              <div
                className={`bg-gradient-to-br ${index % 2 === 0
                  ? "from-[#1B0A21] to-[#000000] border border-[#1C0B22]"
                  : "from-[#000000] to-[#1B0A21] border border-transparent"
                  } rounded-2xl p-8 shadow-lg flex flex-col items-center`}
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-2 text-center text-sm">
                  {plan.description}
                </p>
                <ul className="w-full">
                  {plan.values.map((value, i) => (
                    <li
                      key={i}
                      className="py-3 text-center text-white text-sm font-medium border-b border-gray-700 last:border-none"
                    >
                      {value}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-6 px-5 py-2 text-white text-sm rounded-lg font-medium mx-auto block hover:opacity-90 transition"
                  style={{
                    background:
                      "linear-gradient(212deg, #9f8bcf 0%, rgb(98, 66, 165) 100%)",
                  }}
                >
                  Start Trading
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
