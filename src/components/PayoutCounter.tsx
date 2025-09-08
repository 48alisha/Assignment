import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PayoutCounter() {
  const [count, setCount] = useState(999152);
  const { ref: counterRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"], // Start animating when section enters
  });

  // Line 1 (We've Paid Out Over)
  const line1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const line1Blur = useTransform(scrollYProgress, [0, 0.2, 0.4], ["10px", "0px", "0px"]);
  const line1Y = useTransform(scrollYProgress, [0, 0.2, 0.4], [30, 0, 0]);

  // Line 2 ($1M to Traders)
  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [0, 1, 1]);
  const line2Blur = useTransform(scrollYProgress, [0.25, 0.45, 0.6], ["10px", "0px", "0px"]);
  const line2Y = useTransform(scrollYProgress, [0.25, 0.45, 0.6], [30, 0, 0]);

  const targetCount = 1000000;

  useEffect(() => {
    if (!inView) return;

    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetCount) {
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Video Background */}
      <div className="w-full h-[60%] overflow-hidden absolute bottom-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full object-cover"
        >
          <source
            src="https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: "linear-gradient(to top, transparent 60%, black 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <p className="text-gray-300 text-sm mb-6 font-light border w-fit py-2 px-6 rounded-4xl border-blue-500/20">
            Payouts
          </p>

          {/* Animated Heading (Scroll-Based) */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <motion.span
              style={{
                opacity: line1Opacity,
                filter: line1Blur,
                y: line1Y,
              }}
              className="block"
            >
              We&apos;ve Paid Out Over
            </motion.span>
            <motion.span
              style={{
                opacity: line2Opacity,
                filter: line2Blur,
                y: line2Y,
              }}
              className="block"
            >
              $1M to Traders
            </motion.span>
          </h2>

          <p className="text-[#C0C1C3] font-light">
            Your Trust is Our Fuel—Power Up with Abcd
          </p>

          {/* Counter */}
          <div
  suppressHydrationWarning
  ref={counterRef}
  className="
    text-[48px]       /* Mobile */
    sm:text-[64px]    /* Small devices */
    md:text-[80px]    /* Tablets */
    lg:text-[140px]   /* Laptops */
    xl:text-[160px]   /* Large screens */
    2xl:text-[180px]  /* Extra large */
    font-semibold 
    bg-gradient-to-r from-purple-400 to-pink-400 
    text-transparent bg-clip-text
    leading-none text-center
  "
>
  ${count.toLocaleString()}+
</div>

          <div className="flex justify-center items-center pt-8">
            <div className="relative p-[1px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />
              <Button
                className="group relative z-10 py-4 px-6 text-md rounded-2xl bg-black shadow-lg text-white min-w-[180px] min-h-[45px] flex items-center justify-center cursor-pointer"
              >
                Are you Next?
                <ArrowUpRight
                  className="ml-2 h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-[45deg]"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}