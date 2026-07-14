import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[140px] opacity-20 top-20 left-10"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[160px] opacity-20 right-0 bottom-0"
      />
    </>
  );
}