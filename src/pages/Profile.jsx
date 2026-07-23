import { Mail, GraduationCap, Briefcase, User } from "lucide-react";
// import Profile from "../pages/Profile";
export default function Profile() {
  const user = {
    name: "Atul Singh",
    email: "atul@example.com",
    college: "Your College",
    branch: "Computer Science",
    graduation: "2027",
    target: "Software Engineer",
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
            A
          </div>

          <div>
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.target}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="flex gap-3 items-center">
            <Mail className="text-blue-600" />
            <div>
              <p className="text-gray-500">Email</p>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <GraduationCap className="text-blue-600" />
            <div>
              <p className="text-gray-500">College</p>
              <p>{user.college}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <User className="text-blue-600" />
            <div>
              <p className="text-gray-500">Branch</p>
              <p>{user.branch}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Briefcase className="text-blue-600" />
            <div>
              <p className="text-gray-500">Graduation</p>
              <p>{user.graduation}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}