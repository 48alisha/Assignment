// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowUpRight } from "lucide-react";
// import AnimatedTimeline from "@/components/AnimatedTimeline";
// import ComparisonSection from "@/components/ComparisonSection";
// import PayoutCounter from "@/components/PayoutCounter";
// import QRSection from "@/components/QrSection";

// export default function Home() {
//   return (
//     <>
//       <div className="bg-black text-white flex flex-col items-center justify-center">
//         <AnimatedTimeline />

//         <div className="flex justify-center items-center pt-8">
//           {/* Rotating border wrapper */}
//           <div className="relative p-[1px] rounded-2xl overflow-hidden">
//             {/* Rotating gradient line */}
//             <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />

//             {/* Button content */}
//             <Button className="relative z-10 py-4 px-6 text-md rounded-2xl bg-[#6242a5] shadow-lg text-white min-w-[210px] min-h-[45px] flex items-center justify-center">
//               Open FREE Account <ArrowUpRight className="ml-2 h-6 w-6" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       <ComparisonSection />
//       <PayoutCounter />
//       <QRSection />
//     </>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import ComparisonSection from "@/components/ComparisonSection";
import PayoutCounter from "@/components/PayoutCounter";
import QRSection from "@/components/QrSection";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Optional: scale the background slightly as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with fade-to-black and smooth scale */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden top-170"
        style={{ scale }}
      >
        <img
          src="https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png?scale-down-to=512"
          alt="Background"
          className="w-full h-screen object-cover"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
        {/* Overlay for smoother fade */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <AnimatedTimeline />

        <div className="flex justify-center items-center pt-8">
          {/* Rotating border wrapper */}
          <div className="relative p-[1px] rounded-2xl overflow-hidden">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />

            {/* Button content */}
            <Button className="relative z-10 py-4 px-6 text-md rounded-2xl bg-[#6242a5] shadow-lg text-white min-w-[210px] min-h-[45px] flex items-center justify-center">
              Open FREE Account <ArrowUpRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <ComparisonSection />
      <PayoutCounter />
      <QRSection />
    </div>
  );
}