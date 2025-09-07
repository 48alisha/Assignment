"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function GlowArc() {
  return (
    <div className="relative flex items-center justify-center h-[70vh] bg-black overflow-hidden">
      {/* SVG Glowing Arc */}
      <motion.svg
        className="absolute bottom-0 w-[800px] h-[400px]"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          {/* Gradient */}
          <linearGradient id="glow-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9f8bcf" />
            <stop offset="100%" stopColor="rgb(98, 66, 165)" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arc Path */}
        <path
          d="M 100 300 A 300 200 0 0 1 700 300"
          stroke="url(#glow-gradient)"
          strokeWidth="30"
          filter="url(#glow)"
          fill="none"
        />
      </motion.svg>

      {/* Button */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Button className="px-6 py-3 rounded-full bg-black text-white border border-gray-700 hover:bg-gray-900 transition flex items-center gap-2 shadow-lg">
          Are you Next? <span className="text-lg">↗</span>
        </Button>
      </motion.div>
    </div>
  );
}
