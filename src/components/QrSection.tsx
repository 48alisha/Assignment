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
        {/* Background Moving Text */}
        <motion.div
          className="whitespace-nowrap text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] font-semibold text-white"
          style={{ x }}
        >
          Trade Anytime <span className="text-[#6242a5]">, Anywhere</span>
        </motion.div>

        {/* QR Code (centered independently) */}
        <div className="absolute z-10 flex flex-col items-center justify-center top-1/2 -translate-y-1/2">
          <div className="bg-[#666666] p-2 rounded-xl shadow-lg">
            <img
              src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
              alt="QR Code"
              className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52"
            />
          </div>
        </div>

        <div className="absolute z-10 flex gap-4 mt-6 bottom-12">
          <img
            decoding="async"
            loading="lazy"
            width="150"
            height="50"
            src="https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png"
            alt="App Store and Google Play"
            className="h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
