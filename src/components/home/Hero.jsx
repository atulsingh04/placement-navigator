import Button from "../common/Button";
import HeroStats from "./HeroStats";
import UploadCard from "./UploadCard";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#030712] via-[#111827] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div className="text-center lg:text-left">

          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI Powered Career Guidance
          </span>

          <h1 className="mt-8 font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            From
            <br />
            <span className="text-blue-400">Dreaming</span>
            <br />
            To Doing.
          </h1>

          <p className="mt-8 text-gray-300 text-base sm:text-lg md:text-xl leading-8 max-w-xl mx-auto lg:mx-0">
            Upload your resume, discover your ideal career,
            get AI-generated company roadmaps and prepare
            smartly for your dream placement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            <Button
              text="Upload Resume"
              className="w-full sm:w-auto"
            />

            <Button
              text="Explore Roadmaps"
              className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600"
            />

          </div>

          <HeroStats />

        </div>

        {/* Right Section */}

        <div className="flex justify-center">
          <UploadCard />
        </div>

      </div>
    </section>
  );
}