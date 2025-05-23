'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';

// Your images
import HS1 from "@/assets/images/wedding/card1.jpg";
import HS2 from "@/assets/images/wedding/card2.jpg";
import HS3 from "@/assets/images/wedding/card3.jpg";
import HS4 from "@/assets/images/wedding/card4.jpg";
import HS5 from "@/assets/images/wedding/card5.jpg";
import HS6 from "@/assets/images/wedding/card6.jpg";
import HS7 from "@/assets/images/wedding/card7.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [HS1, HS2, HS4, HS5, HS6, HS3, HS7];

// === Config ===
const GAP = 20; // px
const IMAGE_WIDTH = 350; // desktop size
const AUTOPLAY_INTERVAL = 4000;


export default function InfiniteCarousel() {
  const x = useMotionValue(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [position, setPosition] = useState(0);

  const step = IMAGE_WIDTH + GAP;
  const visibleSetLength = images.length;
  const totalSlides = visibleSetLength * 2;
  const maxOffset = step * visibleSetLength;

  // === Auto-play every 3s ===
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      moveNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalRef.current!);
  }, []);

  // === Step animation ===
  useEffect(() => {
    const controls = animate(x, -position, {
      duration: 0.6,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [position, x]);

  const moveNext = () => {
    setPosition((prev) => {
      const next = prev + step;
      if (next >= maxOffset) {
        x.set(0); // reset instantly to fake infinite loop
        return step;
      } else {
        return next;
      }
    });
  };

  const movePrev = () => {
    setPosition((prev) => {
      if (prev - step < 0) {
        x.set(-maxOffset); // jump to second set
        return maxOffset - step;
      } else {
        return prev - step;
      }
    });
  };

  return (
   <div className="relative w-full overflow-hidden  mt-28 lg:mt-48">
      {/* Chevron Controls */}
      <button
        onClick={movePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/80 hover:bg-black p-2 rounded-full shadow"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={moveNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/80 hover:bg-black p-2 rounded-full shadow"
      >
        <ChevronRight size={28} />
      </button>

      {/* Carousel */}
      <motion.div
        className="flex w-max"
        style={{ x }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="mr-5 flex-none h-[250px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`carousel-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
