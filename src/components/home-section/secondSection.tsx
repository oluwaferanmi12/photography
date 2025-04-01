import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import sImage1 from "@/assets/svgs/second-section-img-1.svg";
import sImage2 from "@/assets/svgs/second-section-img-2.svg";
import sImage3 from "@/assets/svgs/second-section-img-3.svg";
import sImage4 from "@/assets/svgs/second-section-img-4.svg";
import photography from "@/assets/svgs/base-photography.svg";
import photography2 from "@/assets/svgs/base-photography-2.svg";

export default function HomeSecondSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Define animations for each image (moving to center)
  const positions = [
    useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-40%", "-50%"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-30%", "-40%"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-20%", "-30%"]),
    useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-10%", "-20%"]),
  ];

  const scales = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={sectionRef} className="mt-0 pt-7 px-7 h-[150vh] min-h-screen relative flex flex-col justify-center items-center">
      {/* Centered text */}
      <div className="text-4xl text-center text-[#635E5E] z-0 relative">
        <p>BRANDING PHOTOS</p>
        <p className="my-3">
          AND HEADSHOTS TO HELP <span className="text-[#FB5711]">STAND OUT</span>
        </p>
        <p>FROM THE CROWD</p>
      </div>

      {/* Image Stacking */}
      <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
        {[sImage1, sImage2, sImage3, sImage4].map((src, index) => (
          <motion.div
            key={index}
            className="absolute w-[300px] h-[400px] flex justify-center"
            style={{
              y: positions[index], // Move image upwards on scroll
              scale: scales, // Slight zoom-in effect
              zIndex: 10 + index,
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <Image src={src} alt={`Image ${index + 1}`} className="rounded-xl shadow-lg" />
          </motion.div>
        ))}
      </div>

      {/* Bottom icons */}
      <span className="absolute bottom-0 left-7 z-10">
        <Image src={photography} className="w-40" alt="icon" />
      </span>
      <span className="absolute bottom-0 right-7 z-10">
        <Image src={photography2} className="w-40" alt="icon" />
      </span>
    </div>
  );
}
