import { motion } from "framer-motion";

const colors = [
  "bg-purple-500",
  "bg-green-400",
  "bg-yellow-600",
  "bg-blue-600",
  "bg-pink-400",
  "bg-purple-500",
  "bg-green-400",
  "bg-yellow-600",
  "bg-blue-600",
];

export const FallingTag = ({ text, index, total }) => {
    const left = Math.random() * 80 + 10; // random left between 10% and 90%
    const delay = Math.random() * 0.6; // random delay
    const rotation = (Math.random() - 0.5) * 20; // random rotation between -10 to 10 degrees
    const bounceY = -120 - Math.random() * 80; // bounce height between -120 and -200

  return (
    <motion.div
      drag
      initial={{ y: -300, opacity: 0 }}
      animate={{
        y: [ -300, bounceY, 0 ],
        opacity: 1,
        rotate: rotation,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay,
      }}
      className={`pt-fallbox-item absolute px-6 py-2 rounded-lg text-white text-sm font-medium cursor-grab z-30 whitespace-nowrap ${colors[index % colors.length]}`}
      style={{ left: `${left}%`, transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
    >
      <span>{text}</span>
    </motion.div>
  );
};
