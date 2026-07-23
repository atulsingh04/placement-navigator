import { motion } from "framer-motion";

export default function HowItWorksCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
        {index + 1}
      </div>

      <div className="flex justify-center mt-4">
        <Icon size={50} className="text-blue-500" />
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {step.title}
      </h3>

      <p className="text-gray-400 mt-4">
        {step.description}
      </p>
    </motion.div>
  );
}