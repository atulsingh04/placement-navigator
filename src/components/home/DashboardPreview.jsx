import {
  BarChart3,
  TrendingUp,
  Trophy,
} from "lucide-react";

export default function DashboardPreview() {

  const cards = [

    {
      icon: BarChart3,
      title: "ATS Score",
      value: "88%"
    },

    {
      icon: TrendingUp,
      title: "Roadmap Progress",
      value: "64%"
    },

    {
      icon: Trophy,
      title: "Mock Interviews",
      value: "12"
    }

  ];

  return (

    <section className="py-24 bg-[#030712] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center">

          Student Dashboard

        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >

                <Icon
                  size={42}
                  className="text-blue-500"
                />

                <h2 className="mt-5 text-2xl">

                  {card.title}

                </h2>

                <h1 className="text-5xl font-bold mt-5">

                  {card.value}

                </h1>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}