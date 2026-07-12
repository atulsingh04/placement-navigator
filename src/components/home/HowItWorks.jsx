const steps = [
  {
    icon: "📄",
    title: "Upload Resume",
    description: "Upload your latest resume.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    description: "AI analyzes your resume.",
  },
  {
    icon: "🎯",
    title: "Career Prediction",
    description: "Find your best career path.",
  },
  {
    icon: "🛣️",
    title: "Roadmap",
    description: "Get a company-specific roadmap.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        How It Works
      </h1>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-gray-900 p-6 rounded-xl text-center"
          >
            <div className="text-5xl">{step.icon}</div>
            <h2 className="text-xl font-bold mt-4">{step.title}</h2>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}