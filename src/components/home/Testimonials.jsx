import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24">

      <h1 className="text-center text-5xl font-bold">
        What Students Say
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

        {testimonials.map((item) => (

          <div
            key={item.name}
            className="bg-gray-900 rounded-2xl p-8"
          >

            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <p className="text-blue-400">
              {item.role}
            </p>

            <p className="mt-4 text-gray-400">
              {item.review}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}