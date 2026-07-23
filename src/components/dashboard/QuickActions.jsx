import { Link } from "react-router-dom";
import {
  Upload,
  Brain,
  BookOpen,
  User,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid gap-4">

        {/* Upload Resume */}
        <Link to="/resume-upload">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            <Upload size={20} />
            Upload Resume
          </button>
        </Link>

        {/* Practice MCQs */}
        <Link to="/mcq">
          <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
            <BookOpen size={20} />
            Practice MCQs
          </button>
        </Link>

        {/* My Profile */}
        <Link to="/profile">
          <button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
            <User size={20} />
            My Profile
          </button>
        </Link>

        {/* Career Roadmap */}
        <button
          disabled
          className="w-full flex items-center justify-center gap-2 bg-green-400 text-white py-3 rounded-xl font-semibold cursor-not-allowed"
        >
          <Brain size={20} />
          Career Roadmap (Coming Soon)
        </button>

      </div>

    </div>
  );
}