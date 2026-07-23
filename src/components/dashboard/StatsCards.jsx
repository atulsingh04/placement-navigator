import {
  FileText,
  Target,
  Trophy,
  Briefcase,
} from "lucide-react";

export default function StatsCards({ resume }) {

  const stats = [
    {
      title: "Resume Score",
      value: resume?.score ? `${resume.score}%` : "--",
      icon: <FileText size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Skills Found",
      value: resume?.foundSkills?.length || 0,
      icon: <Target size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Missing Skills",
      value: resume?.missingSkills?.length || 0,
      icon: <Trophy size={28} />,
      color: "bg-red-600",
    },
    {
      title: "Target Company",
      value: "Google",
      icon: <Briefcase size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
        >
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} text-white p-4 rounded-xl shadow`}
            >
              {item.icon}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}