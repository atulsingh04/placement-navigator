import {
  CheckCircle,
  FileText,
  BookOpen,
  Brain,
  TrendingUp,
} from "lucide-react";

export default function RecentActivity({ resume }) {
  const activities = [
    {
      icon: <FileText className="text-blue-600" size={20} />,
      title: "Resume Uploaded",
      desc: resume
        ? "Your latest resume has been analyzed successfully."
        : "Upload your resume to start analysis.",
    },
    {
      icon: <CheckCircle className="text-green-600" size={20} />,
      title: "Resume Score",
      desc: resume
        ? `Current ATS Score: ${resume.score}%`
        : "No score available yet.",
    },
    {
      icon: <BookOpen className="text-purple-600" size={20} />,
      title: "Learning Progress",
      desc: "Continue your placement preparation roadmap.",
    },
    {
      icon: <Brain className="text-orange-500" size={20} />,
      title: "MCQ Practice",
      desc: "Practice aptitude and technical MCQs daily.",
    },
    {
      icon: <TrendingUp className="text-pink-600" size={20} />,
      title: "Placement Goal",
      desc: "Stay consistent to improve your placement readiness.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition"
          >
            <div>{item.icon}</div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}