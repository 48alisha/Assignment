// "use client";

// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// const features = [
//   "Secure Transactions",
//   "Instant Withdrawals",
//   "24/7 Support",
//   "Low Trading Fees",
//   "Advanced Analytics",
// ];

// export default function ComparisonSection() {
//   return (
//     <section className="relative bg-black text-white py-24 px-6 md:px-12">
//       {/* Heading */}
//       <motion.div
//         className="text-center max-w-3xl mx-auto mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Start Small, <span className="text-purple-400">Scale </span>Big
//         </h2>
//         <p className="text-gray-400 text-lg">
//           Flexible Deposits for Every Trader
//         </p>
//       </motion.div>

//       {/* Comparison Table */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Our Platform */}
//         <motion.div
//           className="bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-2xl p-8 shadow-lg border border-purple-500/30"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-6">🚀 Our Platform</h3>
//           <ul className="space-y-4">
//             {features.map((feature, i) => (
//               <motion.li
//                 key={i}
//                 className="flex items-center space-x-3"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//               >
//                 <Check className="text-green-400 h-5 w-5 flex-shrink-0" />
//                 <span>{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Traditional */}
//         <motion.div
//           className="bg-gradient-to-br from-gray-800/60 to-black rounded-2xl p-8 shadow-lg border border-gray-700"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-6">📉 Traditional</h3>
//           <ul className="space-y-4 text-gray-400">
//             <li className="flex items-center space-x-3">❌ Hidden Charges</li>
//             <li className="flex items-center space-x-3">❌ Delayed Withdrawals</li>
//             <li className="flex items-center space-x-3">❌ Limited Support</li>
//             <li className="flex items-center space-x-3">❌ High Trading Fees</li>
//             <li className="flex items-center space-x-3">❌ Basic Tools Only</li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }"use client";
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
        <section className="relative bg-black text-white py-24 px-6 md:px-12">
            {/* Heading */}
            <motion.div
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Choose Your <span className="text-purple-400">Plan</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Flexible deposits for every trader.
                </p>
            </motion.div>

            {/* Full Comparison Table */}
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                {/* Left Feature Column */}
                <div className="space-y-4 text-gray-400">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-700 pb-3 last:border-none"
                        >
                            {feature}
                        </div>
                    ))}
                </div>

                {/* Plans Columns */}
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-2xl p-8 shadow-lg border border-purple-500/30 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">{plan.name}</h3>
                        <p className="text-gray-400 mb-6 text-center">{plan.description}</p>
                        <ul className="w-full">
                            {plan.values.map((value, i) => (
                                <li
                                    key={i}
                                    className="py-3 text-center text-white font-medium border-b border-gray-700 last:border-none"
                                >
                                    {value}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="mt-6 px-5 py-2 text-white text-sm rounded-lg font-medium mx-auto block hover:opacity-90 transition"
                            style={{
                                background:
                                    "linear-gradient(212deg, var(--token-292189f5-7fd3-468a-b7e8-8c4b2067ec9d, #9f8bcf) 0%, var(--token-fd5ec20b-d16d-421a-a635-4b3527184762, rgb(98, 66, 165)) 100%)"
                            }}
                        >
                            Start Trading
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}