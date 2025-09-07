// "use client";

// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const steps = [
//   {
//     id: 1,
//     title: "Register your account",
//     step: "Step 1",
//     side: "right" as const,
//   },
//   {
//     id: 2,
//     title: "Deposit your funds",
//     step: "Step 2",
//     side: "left" as const,
//   },
//   {
//     id: 3,
//     title: "KYC",
//     step: "Step 3",
//     side: "right" as const,
//   },
//   {
//     id: 4,
//     title: "Start Trading & Earn Profits",
//     step: "Step 4",
//     side: "left" as const,
//   },
// ];

// export default function AnimatedTimeline() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const [activeStep, setActiveStep] = useState(0);

//   // Calculate which step should be active based on scroll progress
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       const stepIndex = Math.floor(latest * steps.length);
//       setActiveStep(Math.min(stepIndex, steps.length - 1));
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   // Transform scroll progress to line height
//   const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
//   const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

//   return (
//     <div ref={containerRef} className="relative min-h-[400vh] py-32">
//       {/* Animated Progress Line */}
//       <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-screen">
//         <motion.div
//           className="w-full bg-gradient-to-b from-purple-400 to-transparent origin-top"
//           style={{
//             height: lineHeight,
//             opacity: lineOpacity,
//           }}
//         />
//       </div>

//       {/* Steps */}
//       <div className="relative max-w-6xl mx-auto px-8">
//         {steps.map((step, index) => {
//           const stepRef = useRef<HTMLDivElement>(null);
//           const isInView = useInView(stepRef, {
//             // threshold: 0.3,
//             once: false,
//           });

//           const isActive = activeStep === index;
//           const isCompleted = activeStep > index;

//           return (
//             <motion.div
//               key={step.id}
//               ref={stepRef}
//               className={`flex items-center justify-${step.side} mb-32 relative`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: isInView ? 1 : 0.3,
//                 y: isInView ? 0 : 50,
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//               }}
//             >
//               <div className={`flex items-center space-x-6 ${step.side === "left" ? "flex-row" : "flex-row-reverse space-x-reverse"}`}>
//                 {/* Step Number */}
//                 <motion.div
//                   className={`text-6xl font-bold ${
//                     isActive
//                       ? "text-white"
//                       : isCompleted
//                       ? "text-purple-400"
//                       : "text-white/30"
//                   }`}
//                   animate={{
//                     scale: isActive ? 1.1 : 1,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {String(step.id).padStart(2, "0")}
//                 </motion.div>

//                 {/* Step Content */}
//                 <motion.div
//                   className={`text-${step.side === "left" ? "left" : "right"} max-w-md`}
//                   animate={{
//                     x: isActive ? (step.side === "left" ? 10 : -10) : 0,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                 >
//                   <motion.p
//                     className={`text-sm mb-1 ${
//                       isActive ? "text-purple-300" : "text-gray-400"
//                     }`}
//                     animate={{
//                       color: isActive ? "#c084fc" : "#9ca3af",
//                     }}
//                   >
//                     {step.step}
//                   </motion.p>
//                   <motion.h3
//                     className={`text-xl font-medium ${
//                       isActive ? "text-white" : "text-white/70"
//                     }`}
//                     animate={{
//                       color: isActive ? "#ffffff" : "#ffffffb3",
//                       scale: isActive ? 1.05 : 1,
//                     }}
//                     transition={{
//                       duration: 0.3,
//                       ease: "easeOut",
//                     }}
//                   >
//                     {step.title}
//                   </motion.h3>
//                 </motion.div>
//               </div>

//               {/* Active Step Indicator */}
//               {isActive && (
//                 <motion.div
//                   className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full"
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0, opacity: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                 />
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  { id: 1, title: "Register your account", step: "Step 1", side: "right" as const },
  { id: 2, title: "Deposit your funds", step: "Step 2", side: "left" as const },
  { id: 3, title: "KYC", step: "Step 3", side: "right" as const },
  { id: 4, title: "Start Trading & Earn Profits", step: "Step 4", side: "left" as const },
];

export default function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [activeStep, setActiveStep] = useState(0);

  // Active step update
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.floor(latest * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Line animation
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] py-32 bg-black">
      {/* Timeline Line */}
      <div className="fixed left-1/2 top-0 transform -translate-x-1/2 w-px h-screen">
        <motion.div
          className="w-full bg-gradient-to-b from-purple-400 to-transparent origin-top"
          style={{ height: lineHeight, opacity: lineOpacity }}
        />
      </div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto px-8">
        {steps.map((step, index) => {
          const stepRef = useRef<HTMLDivElement>(null);
          const isInView = useInView(stepRef, { once: false });
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;

          return (
            <motion.div
              key={step.id}
              ref={stepRef}
              className={`flex items-center justify-${
                step.side === "left" ? "start" : "end"
              } mb-32 relative`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInView ? 1 : 0.3,
                y: isInView ? 0 : 50,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className={`flex items-center space-x-6 ${
                  step.side === "left" ? "flex-row" : "flex-row-reverse space-x-reverse"
                }`}
              >
                {/* Step Number */}
                <motion.div
                  className={`text-6xl font-bold ${
                    isActive
                      ? "text-white"
                      : isCompleted
                      ? "text-purple-400"
                      : "text-white/30"
                  }`}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {String(step.id).padStart(2, "0")}
                </motion.div>

                {/* Step Content */}
                <motion.div
                  className={`text-${step.side} max-w-md`}
                  animate={{
                    x: isActive ? (step.side === "left" ? 10 : -10) : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.p
                    className={`text-sm mb-1 ${
                      isActive ? "text-purple-300" : "text-gray-400"
                    }`}
                  >
                    {step.step}
                  </motion.p>
                  <motion.h3
                    className={`text-xl font-medium ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {step.title}
                  </motion.h3>
                </motion.div>
              </div>

              {/* Active Dot */}
              {isActive && (
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}