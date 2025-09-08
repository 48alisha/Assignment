"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function QRSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={sectionRef}
      className="h-[70%] flex items-center justify-center bg-black text-white relative overflow-hidden"
    >
      <div className="sticky top-0 h-full w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-[120px] font-semibold text-white"
          style={{ x }}
        >
          Trade Anymore <span className="text-purple-400">, AnyWhere</span>
        </motion.div>

        <div className="absolute z-10 bg-[#666666] p-2 rounded-xl shadow-lg">
          <img
            src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            alt="QR Code"
            className="w-52 h-52"
          />
        </div>
      </div>
    </div>
  );
}
