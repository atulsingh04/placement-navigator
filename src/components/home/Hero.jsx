import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import UploadCard from "./UploadCard";
import HeroStats from "./HeroStats";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#030712] text-white">

      <BackgroundGlow />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400">

            AI Powered Career Platform

          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

            Crack Your

            <span className="block text-blue-500">

              Dream Placement

            </span>

            with AI

          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8">

            Upload your resume.

            Discover your best career.

            Get company-specific roadmaps.

            Practice interviews.

            Chat with AI.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Button text="Upload Resume" />

            <Button
              text="Explore Roadmaps"
              className="bg-gray-800 hover:bg-gray-700"
            />

          </div>

          <HeroStats />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <UploadCard />

        </motion.div>

      </div>

    </section>
  );
}