import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
  from: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
}

const directionMap = {
  "top-left": { x: -100, y: -100 },
  "top-right": { x: 100, y: -100 },
  "bottom-left": { x: -100, y: 100 },
  "bottom-right": { x: 100, y: 100 },
};

export const AnimatedCard = ({
  children,
  from,
  delay = 0,
}: AnimatedCardProps) => {
  const ref = useRef(null);
  //   const inView = useInView(ref, { threshold: 0.2 });
  const inView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    } else {
      controls.start({
        opacity: 0,
        ...directionMap[from],
        transition: { duration: 0.6 },
      });
    }
  }, [inView, controls, from, delay]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, ...directionMap[from] }}
    >
      {children}
    </motion.div>
  );
};
