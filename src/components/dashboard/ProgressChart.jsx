export default function ProgressChart({ resume }) {
  const resumeScore = resume?.score || 0;
  const roadmapProgress = 45;
  const interviewProgress = 20;

  const overallProgress = Math.round(
    (resumeScore + roadmapProgress + interviewProgress) / 3
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Overall Progress
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">

        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-5 rounded-full transition-all duration-700"
          style={{ width: `${overallProgress}%` }}
        />

      </div>

      <div className="flex justify-between mt-4">

        <span className="text-gray-600">
          Placement Preparation
        </span>

        <span className="font-bold text-blue-700">
          {overallProgress}%
        </span>

      </div>

      {/* Resume */}

      <div className="mt-8">

        <div className="flex justify-between mb-3">
          <span>Resume</span>
          <span>{resumeScore}%</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 rounded-full bg-green-500"
            style={{ width: `${resumeScore}%` }}
          ></div>
        </div>

      </div>

      {/* Roadmap */}

      <div className="mt-5">

        <div className="flex justify-between mb-3">
          <span>Roadmap</span>
          <span>{roadmapProgress}%</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 rounded-full bg-blue-500"
            style={{ width: `${roadmapProgress}%` }}
          ></div>
        </div>

      </div>

      {/* Interview */}

      <div className="mt-5">

        <div className="flex justify-between mb-3">
          <span>Interview Prep</span>
          <span>{interviewProgress}%</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 rounded-full bg-orange-500"
            style={{ width: `${interviewProgress}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
}