import features from "../../data/features";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#030712] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Powerful AI Features
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Everything you need to prepare for placements, improve your resume,
          crack interviews and achieve your dream job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}