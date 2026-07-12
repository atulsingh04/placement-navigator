const stats = [
  {
    number: "5000+",
    title: "Students"
  },
  {
    number: "100+",
    title: "Companies"
  },
  {
    number: "95%",
    title: "Placement Rate"
  }
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center"
        >

          <h2 className="text-2xl md:text-3xl font-bold text-blue-500">

            {item.number}

          </h2>

          <p className="text-gray-400 mt-2">

            {item.title}

          </p>

        </div>

      ))}

    </div>
  );
}