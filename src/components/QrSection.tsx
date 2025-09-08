

"use client";

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function QRSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based text movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // QR hover 3D rotation and scale
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const glow = useMotionValue(0); // for glow intensity

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX; // -1 to 1
    const deltaY = (y - centerY) / centerY; // -1 to 1

    rotateY.set(deltaX * 15); // max 15deg
    rotateX.set(-deltaY * 15);
  };

  const handleMouseEnter = () => {
    scale.set(1.2);
    glow.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    glow.set(0);
  };

  // Transform glow to box-shadow intensity
  const boxShadow = useTransform(
    glow,
    [0, 1],
    [
      "0 0 0px rgba(255,255,255,0)",
      "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)",
    ]
  );

  return (
    <div
      ref={sectionRef}
      className="h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      <div className="sticky top-0 h-full w-full flex items-center justify-center overflow-hidden">
        {/* Background Moving Text (scroll-based) */}
        <motion.div
          className="whitespace-nowrap 
    text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]
    font-semibold text-white absolute text-center px-4"
          style={{ x: textX }}
        >
          Trade Anytime <span className="text-[#6242a5]">, Anywhere</span>
        </motion.div>

        {/* QR Code (hover 3D + scale + glow) */}
        <motion.div
          className="absolute z-10 flex flex-col items-center justify-center top-1/2 -translate-y-1/2 rounded-xl"
          style={{ rotateX, rotateY, scale, boxShadow }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
          <div className="bg-[#666666] p-2 rounded-xl shadow-lg">
            <img
              src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
              alt="QR Code"
              className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-lg"
            />
          </div>
        </motion.div>

        {/* App Store buttons */}
        <div className="absolute z-10 flex gap-4 mt-6 bottom-30">
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