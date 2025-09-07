import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function PayoutCounter() {
  const [count, setCount] = useState(999152); // starting number
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // starts when 20% visible
  });

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (inView) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1); // increase by 1 like live counter
      }, 500); // every 0.5s
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [inView]);

  return (
    <section
      ref={ref}
      className="text-center py-20 bg-black text-white"
    >
      <h2 className="text-4xl font-bold mb-4">
        We’ve Paid Out Over $1M to Traders
      </h2>
      <p className="text-gray-400 mb-8">
        Your Trust is Our Fuel – Power Up with Abcd
      </p>
      <div className="text-7xl font-extrabold">
        ${count.toLocaleString()}+
      </div>
    </section>
  );
}