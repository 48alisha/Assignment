
"use client";

import { motion } from "framer-motion";

export default function QRSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* Moving Text in background */}
      <motion.div
        className="absolute whitespace-nowrap text-6xl  text-white  "
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        Trade Anymore <span className="text-purple-400 font-size[16px]">, AnyWhere</span>
      </motion.div>

      {/* QR Code on top */}
      <div className="relative z-10 bg-gray-900 p-6 rounded-xl shadow-lg">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=DummyQR"
          alt="QR Code"
          className="w-34 h-34"
        />
      </div>
    </div>
  );
}
