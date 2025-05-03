// components/TextReveal.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function TextReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1]  },
      });
    }
  }, [controls, inView]);

  return (
    <motion.h3
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
        rotateX: -90, // Negative rotation to reveal from front
        transformPerspective: 1000,
      }}
      animate={controls}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "bottom center",
      }}
      className="lg:text-center w-full lg:leading-20 text-white text-5xl lg:text-8xl"
    >
      {children}
    </motion.h3>
  );
}
