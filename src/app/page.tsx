"use client";

import { motion } from "framer-motion";
// / import AnimatedTimeline from "@/components/AnimatedTimeline";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import TradingComparisonTable from "@/components/AnimatedTimeline";
import ComparisonSection from "@/components/ComparisonSection";
import PayoutCounter from "@/components/PayoutCounter";
import GlowArc from "@/components/GlowArc";
import RuNest from "@/components/RuNest";
import QRSection from "@/components/QrSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br to-black relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br to-black/70"></div>

        {/* Header Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-gray-300 text-sm mb-4 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Process
            </motion.p>
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white">Become a </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Abcd Pro
              </span>
              <span className="text-white"> in sec...</span>
            </motion.h1>
            <motion.p
              className="text-white text-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              🚀 Sign up. Fund. Trade.
            </motion.p>
          </motion.div>




        </div>


        {/* Animated Timeline */}
        <AnimatedTimeline />


      </div>

      <div className="flex justify-center items-center min-h-screen">
        <Button
          style={{ backgroundColor: "var(--token-fd5ec20b-d16d-421a-a635-4b3527184762, rgb(98, 66, 165))" }}
          className="hover:opacity-90 text-white rounded-full px-6 py-3 text-base font-medium shadow-md border-radius-[15px]"

        >
          Open  FREE Account <ArrowUpRight className="ml-2 h-4 w-4" /></Button>







      </div>
      <ComparisonSection />
      <PayoutCounter />
      <RuNest />
      <QRSection />



    </>
  );
}
