import { useEffect, useState } from "react";
import { getResume } from "../services/resumeService";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import ProgressChart from "../components/dashboard/ProgressChart";
import RoadmapProgress from "../components/dashboard/RoadmapProgress";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    try {
      const data = await getResume();
      setResume(data.resume);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-8">

        {/* Welcome Banner */}
        <WelcomeCard />

        {/* Stats */}
        <StatsCards resume={resume} />

        {/* Progress Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <ProgressChart resume={resume} />

          <RoadmapProgress />

        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <RecentActivity resume={resume} />

          <QuickActions />

        </div>

      </div>

    </div>
  );
}