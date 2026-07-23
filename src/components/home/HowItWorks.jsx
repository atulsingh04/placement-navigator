import steps from "../../data/howItWorks";
import HowItWorksCard from "./HowItWorksCard";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Four simple steps to achieve your dream placement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <HowItWorksCard
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}