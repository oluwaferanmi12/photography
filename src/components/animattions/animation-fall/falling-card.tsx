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

export const FallingTag = ({ text, index }) => {
  const delay = Math.random() * 0.4;
  const bounceY = -120 - Math.random() * 80;
  const rotation = (Math.random() - 0.5) * 10;

  return (
    <motion.div
      drag
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: [ -200, bounceY, 0 ],
        opacity: 1,
        rotate: rotation,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay,
      }}
      className={`px-6 py-2 rounded-lg text-white text-sm font-medium cursor-grab z-30 whitespace-nowrap ${colors[index % colors.length]}`}
    >
      <span>{text}</span>
    </motion.div>
  );
};
