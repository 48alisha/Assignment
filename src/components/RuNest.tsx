"use client";

import { motion } from "framer-motion";

export default function NeonGlowEffect() {
  return (
    <div className="relative w-full h-[450px] bg-black flex items-center justify-center">
      {/* Bright Neon Halo (Visible Front Layer) */}
      <motion.div
        className="absolute w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,0,255,0.9) 0%, rgba(200,0,255,0.6) 40%, rgba(100,0,150,0.3) 70%, rgba(0,0,0,0) 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [1, 0.95, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Foreground Button or Content */}
      <button className="relative z-10 px-6 py-3 bg-black text-white rounded-full border border-white">
        Are you Next?
      </button>
    </div>
  );
}