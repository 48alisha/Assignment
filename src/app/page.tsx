"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import ComparisonSection from "@/components/ComparisonSection";
import PayoutCounter from "@/components/PayoutCounter";
import QRSection from "@/components/QrSection";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white flex flex-col items-center justify-center">
        <AnimatedTimeline />

        <div className="flex justify-center items-center pt-8">
          {/* Rotating border wrapper */}
          <div className="relative p-[1px] rounded-2xl overflow-hidden">
            {/* Rotating gradient line */}
            <div className="absolute inset-0 rounded-2xl animate-spin-slow bg-[conic-gradient(from_0deg,transparent,#ffffff,transparent)]" />

            {/* Button content */}
            <Button className="relative z-10 py-4 px-6 text-md rounded-2xl bg-[#6242a5] shadow-lg text-white min-w-[210px] min-h-[45px] flex items-center justify-center">
              Open FREE Account <ArrowUpRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <ComparisonSection />
      <PayoutCounter />
      <QRSection />
    </>
  );
}
