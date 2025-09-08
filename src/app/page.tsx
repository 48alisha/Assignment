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
      <div className=" bg-black text-white flex flex-col items-center justify-center">
        <AnimatedTimeline />
        <div className="flex justify-center items-center pt-8">
          <Button
            style={{
              backgroundColor:
                "var(--token-fd5ec20b-d16d-421a-a635-4b3527184762, rgb(98, 66, 165))",
            }}
            className="py-4 px-8 text-md rounded-2xl shadow-lg hover:opacity-90 text-white min-w-[220px] min-h-[45px] flex items-center justify-center"
          >
            Open FREE Account <ArrowUpRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>

      <ComparisonSection />
      <PayoutCounter />
      <QRSection />
    </>
  );
}
