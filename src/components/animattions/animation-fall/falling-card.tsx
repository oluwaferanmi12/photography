import { motion } from "framer-motion";

const colors = [
  "bg-purple-500", "bg-green-400", "bg-yellow-200", "bg-blue-600", "bg-pink-400"
];

export const FallingTag = ({ text, index }) => {
  const randomX = Math.random() * 80 + 10; // 10% to 90%
  const randomDelay = Math.random() * 0.5;

  return (
    <motion.div
      drag
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 230, opacity: 1 }} // adjust 230 based on where the top of image starts
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: randomDelay,
      }}
      className={`absolute px-3 py-1 rounded-lg text-white text-sm font-medium cursor-grab ${colors[index % colors.length]}`}
      style={{
        left: `${randomX}%`,
      }}
    >
      {text}
    </motion.div>
  );
};
