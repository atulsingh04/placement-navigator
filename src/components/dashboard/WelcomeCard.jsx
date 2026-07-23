import { CalendarDays, Sparkles, Trophy, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WelcomeCard() {
  const navigate = useNavigate();

  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 shadow-xl text-white">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left Section */}
        <div>

          <h1 className="text-4xl font-extrabold">
            👋 Welcome Back
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Continue your placement preparation with AI and achieve your dream company.
          </p>

          <div className="flex items-center gap-2 mt-5 text-blue-100">
            <CalendarDays size={20} />
            <span>{date}</span>
          </div>

          <div className="flex gap-8 mt-8 flex-wrap">

            <div className="flex items-center gap-2">
              <Target className="text-yellow-300" size={22} />
              <div>
                <p className="text-sm text-blue-200">Target</p>
                <h3 className="font-bold">Software Engineer</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-300" size={22} />
              <div>
                <p className="text-sm text-blue-200">Progress</p>
                <h3 className="font-bold">85%</h3>
              </div>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center gap-4">

<button
  className="flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition duration-300"
>
  <Sparkles size={20} />
  Continue Learning
</button>
          <p className="text-blue-100 text-sm text-center">
            Keep solving MCQs and uploading resumes to improve your placement score.
          </p>

        </div>

      </div>

    </div>
  );
}