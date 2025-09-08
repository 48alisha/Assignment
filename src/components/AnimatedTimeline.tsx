"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TimelineStep {
  id: number;
  title: string;
  step: string;
}

const steps: TimelineStep[] = [
  { id: 1, title: "Register your account", step: "Step 1" },
  { id: 2, title: "Deposit your funds", step: "Step 2" },
  { id: 3, title: "KYC", step: "Step 3" },
  { id: 4, title: "Start Trading & Earn Profits", step: "Step 4" },
];

const AnimatedTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Setup scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Update active step based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.floor(latest * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Animate the progress line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-black pt-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-6 text-center mb-6">
        <motion.span
          className="inline-block text-gray-300 text-sm font-light border border-blue-500/20 rounded-full py-2 px-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Become a
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Abcd Pro{" "}
          </span>
          in sec…
        </motion.h2>

        {/* Subtitle like in PayoutCounter */}
        <motion.p
          className="text-[#C0C1C3] font-light mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Trust is Our Fuel—Power Up with Abcd
        </motion.p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6">
        <div ref={containerRef} className="relative pb-60">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-[#12131C]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#D5C5FA] origin-top"
              style={{ height: lineHeight }}
            />
          </div>
          {/* Timeline items */}
          <div className="space-y-60">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative group">
                  {/* Step number circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
                    >
                      <span
                        className={`text-5xl font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : isCompleted
                            ? "text-white"
                            : "text-[#13141D]"
                        }`}
                      >
                        {String(step.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Step content */}
                  <div className={`relative bg-black py-6`}>
                    <div
                      className={`rounded-lg w-[42%] ${
                        isEven ? "ml-auto" : "mr-[10%]"
                      }`}
                    >
                      <div
                        className={`flex flex-col ${
                          isEven ? "items-start" : "items-end"
                        }`}
                      >
                        <p className="mb-1 text-lg text-[#C0C1C3]">
                          {step.step}
                        </p>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
