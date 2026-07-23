import { motion } from "framer-motion";

export default function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition"
    >
      <Icon size={45} className="text-blue-500" />

      <h2 className="text-2xl font-bold mt-6">
        {feature.title}
      </h2>

      <p className="text-gray-400 mt-4 leading-7">
        {feature.description}
      </p>
    </motion.div>
  );
}