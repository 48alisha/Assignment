import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PayoutCounter() {
  const [count, setCount] = useState(999152);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
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

        {/* Top fade overlay */}
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We've Paid Out Over <br></br>$1M to Traders
          </h2>

          <p className="text-[#C0C1C3] font-light">
            Your Trust is Our Fuel—Power Up with Abcd
          </p>

          {/* Counter */}
          <div suppressHydrationWarning
            ref={ref}
            className="text-[100px] md:text-[140px] lg:text-[180px] 2xl:text-[220px] font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            ${count.toLocaleString()}+
          </div>

          <div className="flex justify-center items-center pt-8">
            {/* Rotating border wrapper */}
            <div className="relative p-[1px] rounded-2xl overflow-hidden">
              {/* Rotating gradient line */}
              <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />

              {/* Button content */}
              <Button className="relative z-10 py-4 px-6 text-md rounded-2xl bg-black shadow-lg text-white min-w-[180px] min-h-[45px] flex items-center justify-center">
                Are you Next? <ArrowUpRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
