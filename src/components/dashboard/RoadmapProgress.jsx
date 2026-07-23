const roadmap = [
  {
    title: "Java Fundamentals",
    progress: 100,
    color: "bg-green-500",
  },
  {
    title: "Data Structures & Algorithms",
    progress: 70,
    color: "bg-blue-500",
  },
  {
    title: "React Development",
    progress: 60,
    color: "bg-purple-500",
  },
  {
    title: "Node.js & Express",
    progress: 45,
    color: "bg-orange-500",
  },
  {
    title: "MongoDB",
    progress: 35,
    color: "bg-pink-500",
  },
  {
    title: "System Design",
    progress: 10,
    color: "bg-cyan-500",
  },
];

export default function RoadmapProgress() {
  const completed = roadmap.filter(
    (item) => item.progress === 100
  ).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Learning Roadmap
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Keep progressing towards your placement goals.
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold text-blue-600">
            {completed}/{roadmap.length}
          </p>

          <p className="text-gray-500 text-sm">
            Modules Completed
          </p>
        </div>

      </div>

      <div className="space-y-6">

        {roadmap.map((item, index) => (
          <div key={index}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {item.title}
              </span>

              <span className="font-semibold text-blue-600">
                {item.progress}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className={`${item.color} h-3 rounded-full transition-all duration-700`}
                style={{
                  width: `${item.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}