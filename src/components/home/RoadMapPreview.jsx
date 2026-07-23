import roadmap from "../../data/roadmaps";

export default function RoadmapPreview() {
  return (
    <section id="roadmaps" className="py-24 bg-[#030712] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          AI Roadmap Preview
        </h2>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 mt-16 border border-white/10">

          <h3 className="text-3xl font-bold text-blue-500">
            Google Software Engineer
          </h3>

          <div className="mt-8 space-y-5">
            {roadmap.map((item) => (
              <div
                key={item.week}
                className="flex justify-between bg-gray-900 rounded-xl p-5"
              >
                <span>{item.week}</span>

                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-2">Progress</p>

            <div className="bg-gray-800 rounded-full h-4 overflow-hidden">
              <div className="bg-blue-500 h-4 w-2/5 rounded-full"></div>
            </div>

            <p className="mt-2 text-blue-400">
              40% Completed
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}