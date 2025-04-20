import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FadeInAnimate = ({
  children,
  transitionDuration = 1,
  amount = 0.5,
}: {
  children: ReactNode;
  transitionDuration?: number;
  amount?: number;
}) => {
  const animateRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animateRef, { amount: amount });
  const variant = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <motion.div
      ref={animateRef}
      animate={isInView ? "reveal" : "hidden"}
      initial="hidden"
      transition={{ duration: transitionDuration }}
      variants={variant}
    >
      {children}
    </motion.div>
  );
};